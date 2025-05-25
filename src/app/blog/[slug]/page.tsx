import { getPostBySlug, getAllPostSlugs } from "~/lib/blog";
import { formatDate } from "~/lib/utils";
import BlogHeader from "~/app/_components/blog-header";
import Footer from "~/app/_components/footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Articolo non trovato - Edojo",
    };
  }

  return {
    title: `${post.title} - Blog Edojo`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <BlogHeader />
      
      {/* Header */}
      <div className="bg-gray-50 pt-16">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Torna al blog
          </Link>

          {/* Featured Image */}
          <div className="aspect-video relative mb-8 rounded-lg overflow-hidden bg-gray-200">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            {post.featured && (
              <div className="absolute top-4 left-4">
                <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-sm font-semibold text-black">
                  In evidenza
                </span>
              </div>
            )}
          </div>

          {/* Meta */}
          <div className="mb-6 flex items-center gap-4 text-sm text-gray-500">
            <span className="font-medium">{post.author}</span>
            <span>•</span>
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
          </div>

          {/* Title */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {post.title}
          </h1>

          {/* Tags */}
          <div className="mb-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.trim() === '') return null;
            
            // Handle headings
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-gray-900">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            
            if (paragraph.startsWith('# ')) {
              return (
                <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-gray-900">
                  {paragraph.replace('# ', '')}
                </h1>
              );
            }

            // Handle code blocks
            if (paragraph.startsWith('```')) {
              return null; // Handle code blocks separately if needed
            }

            // Handle lists
            if (paragraph.startsWith('- ')) {
              return (
                <li key={index} className="mb-2">
                  {paragraph.replace('- ', '')}
                </li>
              );
            }

            // Regular paragraphs
            return (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Back to blog */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Torna al blog
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 
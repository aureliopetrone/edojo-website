import { getAllPosts } from "~/lib/blog";
import { formatDate } from "~/lib/utils";
import BlogHeader from "~/app/_components/blog-header";
import Footer from "~/app/_components/footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Blog - Edojo",
  description: "Articoli e tutorial su sviluppo web, programmazione e tecnologie moderne",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogHeader />
      
      {/* Header */}
      <div className="bg-white shadow-sm pt-16">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Blog
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Articoli, tutorial e approfondimenti sul mondo dello sviluppo web
            </p>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {posts.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-500">Nessun articolo disponibile al momento.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
              >
                {/* Featured Image */}
                <div className="aspect-video relative bg-gray-200">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {post.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-sm font-semibold text-black">
                        In evidenza
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  {/* Meta */}
                  <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>•</span>
                    <time dateTime={post.publishedAt}>
                      {formatDate(post.publishedAt)}
                    </time>
                  </div>

                  {/* Title */}
                  <h2 className="mb-3 text-xl font-bold text-gray-900 line-clamp-2">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="mb-4 text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Leggi di più
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
} 
import { getLatestPosts } from "~/lib/blog";
import { formatDate } from "~/lib/utils";
import Link from "next/link";
import Image from "next/image";

export default async function BlogSection() {
  const latestPosts = await getLatestPosts(3);

  // Filter posts that have valid slugs and check if latestPosts is an array and has items
  const validPosts = Array.isArray(latestPosts) 
    ? latestPosts.filter(post => post.slug && post.slug !== 'null' && post.slug.trim() !== '')
    : [];

  if (validPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Dal nostro blog
          </h2>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {validPosts.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Featured Image */}
              <div className="aspect-video relative bg-gray-200">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
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
                <h3 className="mb-3 text-xl font-bold text-gray-900 line-clamp-2">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="mb-4 text-gray-600 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map((tag) => (
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
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
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

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="relative bg-black text-white hover:bg-neutral-900 px-8 py-3 text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl origami-button inline-flex items-center"
            style={{
              clipPath: 'polygon(0% 0%, calc(100% - 12px) 0%, 100% 100%, 12px 100%)',
              transform: 'perspective(1000px) rotateX(5deg)',
            }}
          >
            <span className="relative z-10 flex items-center">
              Blog
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <div 
              className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-black opacity-0 hover:opacity-100 transition-opacity duration-300"
              style={{
                clipPath: 'polygon(0% 0%, calc(100% - 12px) 0%, 100% 100%, 12px 100%)',
              }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
} 
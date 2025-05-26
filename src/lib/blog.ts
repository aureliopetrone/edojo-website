import { blogDb } from './blog-db'

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  featured: boolean;
  image: string;
}

interface DbPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  publishedAt: Date;
  updatedAt: Date;
  featured: boolean;
  createdBy: {
    name: string | null;
    email: string | null;
  } | null;
}

// Helper function to convert database post to BlogPost interface
function convertDbPost(dbPost: DbPost): BlogPost {
  return {
    id: dbPost.id.toString(),
    title: dbPost.title,
    slug: dbPost.slug,
    excerpt: dbPost.excerpt ?? '',
    content: dbPost.content,
    author: dbPost.createdBy?.name ?? 'Autore sconosciuto',
    publishedAt: dbPost.publishedAt.toISOString(),
    updatedAt: dbPost.updatedAt.toISOString(),
    tags: [], // TODO: Implement tags system if needed
    featured: dbPost.featured,
    image: '/placeholder-blog.jpg' // Default placeholder image
  };
}

// Funzione per ottenere tutti gli articoli
export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    console.log('\n🚀 Fetching all posts from SQLite...');
    
    const dbPosts = await blogDb.getAllPosts();
    console.log(`📊 Fetched ${dbPosts.length} posts from database`);
    
    const convertedPosts = dbPosts.map(convertDbPost);
    console.log(`✅ Successfully converted ${convertedPosts.length} posts`);
    
    return convertedPosts;
  } catch (error) {
    console.error('❌ Error fetching posts from database:', error);
    return [];
  }
}

// Funzione per ottenere un singolo post per slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    console.log(`\n🔍 Fetching post by slug: "${slug}"`);
    
    const dbPost = await blogDb.getPostBySlug(slug);
    
    if (!dbPost) {
      console.warn(`⚠️  No post found with slug: "${slug}"`);
      return null;
    }
    
    console.log('✅ Found post:', dbPost.title);
    return convertDbPost(dbPost);
  } catch (error) {
    console.error('❌ Error fetching post by slug from database:', error);
    return null;
  }
}

// Funzione per ottenere gli ultimi N post
export async function getLatestPosts(count = 3): Promise<BlogPost[]> {
  try {
    console.log(`\n📰 Fetching latest ${count} posts...`);
    const allPosts = await getAllPosts();
    const latestPosts = allPosts.slice(0, count);
    console.log(`✅ Returning ${latestPosts.length} latest posts`);
    return latestPosts;
  } catch (error) {
    console.error('❌ Error in getLatestPosts:', error);
    return [];
  }
}

// Funzione per ottenere i post in evidenza
export async function getFeaturedPosts(): Promise<BlogPost[]> {
  try {
    console.log('\n⭐ Fetching featured posts...');
    
    const dbPosts = await blogDb.getFeaturedPosts();
    console.log(`📊 Fetched ${dbPosts.length} featured posts from database`);
    
    const convertedPosts = dbPosts.map(convertDbPost);
    console.log(`✅ Successfully converted ${convertedPosts.length} featured posts`);
    
    return convertedPosts;
  } catch (error) {
    console.error('❌ Error fetching featured posts from database:', error);
    return [];
  }
}

// Funzione per ottenere tutti gli slug dei post (utile per generateStaticParams)
export async function getAllPostSlugs(): Promise<string[]> {
  try {
    console.log('\n🔗 Fetching all post slugs...');
    
    const dbPosts = await blogDb.getAllPosts();
    console.log(`📊 Fetched ${dbPosts.length} posts from database`);
    
    const slugs = dbPosts.map(post => post.slug);
    console.log(`✅ Returning ${slugs.length} valid slugs:`, slugs);
    return slugs;
  } catch (error) {
    console.error('❌ Error fetching post slugs from database:', error);
    return [];
  }
} 
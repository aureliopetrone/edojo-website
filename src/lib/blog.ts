import { client, portableTextToPlainText, urlFor, type SanityPost } from './sanity'

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

// Funzione helper per estrarre il slug corretto
function extractSlug(slugField: any): string {
  console.log('📝 Extracting slug from:', typeof slugField, slugField);
  
  if (!slugField) {
    console.warn('⚠️  Slug field is null or undefined');
    return '';
  }
  
  // Se è già una stringa, la restituiamo
  if (typeof slugField === 'string') {
    console.log('✅ Slug is already a string:', slugField);
    return slugField.trim();
  }
  
  // Se è un oggetto con current, prendiamo current
  if (typeof slugField === 'object' && slugField.current) {
    console.log('✅ Extracting slug.current:', slugField.current);
    return slugField.current.trim();
  }
  
  console.error('❌ Invalid slug format:', slugField);
  return '';
}

// Funzione helper per convertire un post Sanity in BlogPost
function convertSanityPost(sanityPost: SanityPost): BlogPost | null {
  console.log('\n🔄 Converting Sanity post:');
  console.log('Raw data:', JSON.stringify({
    _id: sanityPost._id,
    title: sanityPost.title,
    slug: sanityPost.slug,
    hasAuthor: !!sanityPost.author,
    hasMainImage: !!sanityPost.mainImage,
    publishedAt: sanityPost.publishedAt
  }, null, 2));

  // Estraiamo il slug correttamente
  const extractedSlug = extractSlug(sanityPost.slug);
  
  // Se il post non ha uno slug valido, non lo convertiamo
  if (!extractedSlug || extractedSlug === '') {
    console.warn('⚠️  Post senza slug valido:', sanityPost.title);
    return null;
  }
  
  const convertedPost = {
    id: sanityPost._id,
    title: sanityPost.title,
    slug: extractedSlug,
    excerpt: sanityPost.excerpt || '',
    content: portableTextToPlainText(sanityPost.body),
    author: sanityPost.author?.name || 'Autore sconosciuto',
    publishedAt: sanityPost.publishedAt || sanityPost._createdAt,
    updatedAt: sanityPost._updatedAt || sanityPost._createdAt,
    tags: sanityPost.categories?.map(cat => cat.title) || [],
    featured: false,
    image: sanityPost.mainImage ? urlFor(sanityPost.mainImage).width(800).height(400).url() : '/placeholder-blog.jpg'
  };

  console.log('✅ Converting post:', {
    title: convertedPost.title,
    slug: convertedPost.slug,
    author: convertedPost.author,
    hasMainImage: !!sanityPost.mainImage
  });

  return convertedPost;
}

// Funzione per ottenere tutti gli articoli
export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    console.log('\n🚀 Fetching all posts from Sanity...');
    
    // Query migliorata per gestire correttamente il slug
    const query = `*[_type == "post"] {
      _id,
      _createdAt,
      _updatedAt,
      title,
      "slug": coalesce(slug.current, slug),
      excerpt,
      body,
      author->{
        name,
        image,
        bio
      },
      publishedAt,
      categories[]->{
        title
      },
      mainImage
    } | order(_createdAt desc)`;

    const sanityPosts: SanityPost[] = await client.fetch(query);
    console.log(`📊 Fetched ${sanityPosts.length} posts from Sanity`);
    
    if (sanityPosts.length > 0) {
      console.log('📝 First post sample:', {
        title: sanityPosts[0]?.title,
        slug: sanityPosts[0]?.slug,
        type: typeof sanityPosts[0]?.slug
      });
    }
    
    const convertedPosts = sanityPosts.map(convertSanityPost).filter(post => post !== null) as BlogPost[];
    console.log(`✅ Successfully converted ${convertedPosts.length} posts`);
    
    return convertedPosts;
  } catch (error) {
    console.error('❌ Error fetching posts from Sanity:', error);
    return [];
  }
}

// Funzione per ottenere un singolo post per slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    console.log(`\n🔍 Fetching post by slug: "${slug}"`);
    
    // Query migliorata per cercare sia slug.current che slug diretto
    const query = `*[_type == "post" && (slug.current == $slug || slug == $slug)][0] {
      _id,
      _createdAt,
      _updatedAt,
      title,
      "slug": coalesce(slug.current, slug),
      excerpt,
      body,
      author->{
        name,
        image,
        bio
      },
      publishedAt,
      categories[]->{
        title
      },
      mainImage
    }`;

    const sanityPost: SanityPost = await client.fetch(query, { slug });
    
    if (!sanityPost) {
      console.warn(`⚠️  No post found with slug: "${slug}"`);
      return null;
    }
    
    console.log('✅ Found post:', sanityPost.title);
    return convertSanityPost(sanityPost);
  } catch (error) {
    console.error('❌ Error fetching post by slug from Sanity:', error);
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
    
    const query = `*[_type == "post" && featured == true] {
      _id,
      _createdAt,
      _updatedAt,
      title,
      "slug": coalesce(slug.current, slug),
      excerpt,
      body,
      author->{
        name,
        image,
        bio
      },
      publishedAt,
      categories[]->{
        title
      },
      mainImage
    } | order(_createdAt desc)`;

    const sanityPosts: SanityPost[] = await client.fetch(query);
    console.log(`📊 Fetched ${sanityPosts.length} featured posts from Sanity`);
    
    const convertedPosts = sanityPosts.map(convertSanityPost).filter(post => post !== null) as BlogPost[];
    console.log(`✅ Successfully converted ${convertedPosts.length} featured posts`);
    
    return convertedPosts;
  } catch (error) {
    console.error('❌ Error fetching featured posts from Sanity:', error);
    return [];
  }
}

// Funzione per ottenere tutti gli slug dei post (utile per generateStaticParams)
export async function getAllPostSlugs(): Promise<string[]> {
  try {
    console.log('\n🔗 Fetching all post slugs...');
    
    const query = `*[_type == "post"] {
      "slug": coalesce(slug.current, slug)
    }`;

    const slugData: { slug: string }[] = await client.fetch(query);
    console.log(`📊 Fetched ${slugData.length} slug entries from Sanity`);
    
    // Filtriamo e puliamo i slug
    const validSlugs = slugData
      .map(item => extractSlug(item.slug))
      .filter(slug => slug && slug !== '');
    
    console.log(`✅ Returning ${validSlugs.length} valid slugs:`, validSlugs);
    return validSlugs;
  } catch (error) {
    console.error('❌ Error fetching post slugs from Sanity:', error);
    return [];
  }
} 
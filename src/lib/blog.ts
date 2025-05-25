import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

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

const blogDirectory = join(process.cwd(), 'public/blog/articles');

// Funzione per ottenere tutti gli articoli
export function getAllPosts(): BlogPost[] {
  try {
    const fileNames = readdirSync(blogDirectory);
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.json'))
      .map(fileName => {
        const fullPath = join(blogDirectory, fileName);
        const fileContents = readFileSync(fullPath, 'utf8');
        return JSON.parse(fileContents) as BlogPost;
      })
      .sort((a, b) => {
        const dateA = new Date(a.publishedAt);
        const dateB = new Date(b.publishedAt);
        return dateB.getTime() - dateA.getTime(); // Ordina dal più recente
      });

    return allPostsData;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

// Funzione per ottenere un singolo post per slug
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const posts = getAllPosts();
    return posts.find(post => post.slug === slug) ?? null;
  } catch (error) {
    console.error('Error getting post by slug:', error);
    return null;
  }
}

// Funzione per ottenere gli ultimi N post
export function getLatestPosts(count = 3): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.slice(0, count);
}

// Funzione per ottenere i post in evidenza
export function getFeaturedPosts(): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.featured);
}

// Funzione per ottenere tutti gli slug dei post (utile per generateStaticParams)
export function getAllPostSlugs(): string[] {
  const posts = getAllPosts();
  return posts.map(post => post.slug);
} 
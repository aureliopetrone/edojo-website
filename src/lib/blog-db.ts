import { db } from "~/server/db";

// Genera slug da titolo
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // rimuove accenti
    .replace(/[^\w\s-]/g, '') // rimuove caratteri speciali
    .replace(/[\s_-]+/g, '-') // sostituisce spazi e underscore con dash
    .replace(/^-+|-+$/g, ''); // rimuove dash all'inizio e fine
}

// Genera excerpt dal contenuto
function generateExcerpt(content: string, maxLength = 150): string {
  const text = content.replace(/[#*_`\[\]()]/g, '').trim();
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

interface CreatePostData {
  title: string;
  content: string;
  excerpt?: string;
  slug?: string;
  featured?: boolean;
  userId: string;
}

interface UpdatePostData {
  title?: string;
  content?: string;
  excerpt?: string;
  featured?: boolean;
  published?: boolean;
}

export const blogDb = {
  // Ottieni tutti i post pubblicati
  async getAllPosts() {
    return await db.post.findMany({
      where: { published: true },
      orderBy: { publishedAt: 'desc' },
      include: {
        createdBy: {
          select: { name: true, email: true }
        }
      }
    });
  },

  // Ottieni post per slug
  async getPostBySlug(slug: string) {
    return await db.post.findUnique({
      where: { slug },
      include: {
        createdBy: {
          select: { name: true, email: true }
        }
      }
    });
  },

  // Crea nuovo post
  async createPost(data: CreatePostData) {
    const slug = data.slug ?? generateSlug(data.title);
    const excerpt = data.excerpt ?? generateExcerpt(data.content);

    return await db.post.create({
      data: {
        title: data.title,
        slug,
        content: data.content,
        excerpt,
        featured: data.featured ?? false,
        createdById: data.userId,
      },
      include: {
        createdBy: {
          select: { name: true, email: true }
        }
      }
    });
  },

  // Aggiorna post
  async updatePost(id: number, data: UpdatePostData) {
    const updateData: UpdatePostData & { slug?: string; excerpt?: string } = { ...data };
    
    // Rigenera slug se il titolo cambia
    if (data.title) {
      updateData.slug = generateSlug(data.title);
    }
    
    // Rigenera excerpt se il contenuto cambia
    if (data.content && !data.excerpt) {
      updateData.excerpt = generateExcerpt(data.content);
    }

    return await db.post.update({
      where: { id },
      data: updateData,
      include: {
        createdBy: {
          select: { name: true, email: true }
        }
      }
    });
  },

  // Elimina post
  async deletePost(id: number) {
    return await db.post.delete({
      where: { id }
    });
  },

  // Ottieni post in evidenza
  async getFeaturedPosts(limit = 3) {
    return await db.post.findMany({
      where: { 
        published: true,
        featured: true 
      },
      orderBy: { publishedAt: 'desc' },
      take: limit,
      include: {
        createdBy: {
          select: { name: true, email: true }
        }
      }
    });
  }
}; 
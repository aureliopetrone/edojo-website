import { createClient } from '@sanity/client'
import { apiVersion, dataset, projectId } from '../sanity/env'

// Client con permessi di scrittura
export const writeClient = createClient({
  projectId,
  dataset,
  useCdn: false, // Disabilitato per le operazioni di scrittura
  apiVersion,
  token: process.env.SANITY_API_TOKEN, // Token di scrittura
})

// Interfaccia per un nuovo post
export interface CreatePostData {
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  author?: {
    name: string;
    email?: string;
  };
  categories?: string[];
  featured?: boolean;
  publishedAt?: string;
  mainImage?: {
    url: string;
    alt?: string;
  };
}

// Funzione per creare uno slug sicuro
export function createSafeSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // Rimuove caratteri speciali
    .replace(/\s+/g, '-') // Sostituisce spazi con trattini
    .replace(/-+/g, '-') // Rimuove trattini multipli
    .replace(/^-+|-+$/g, ''); // Rimuove trattini all'inizio e alla fine
}

// Funzione per convertire contenuto in blocchi Portable Text
export function contentToPortableText(content: string) {
  const paragraphs = content.split('\n\n').filter(p => p.trim());
  
  return paragraphs.map(paragraph => {
    const trimmed = paragraph.trim();
    
    // Gestione titoli
    if (trimmed.startsWith('# ')) {
      return {
        _type: 'block',
        _key: `block_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        style: 'h1',
        children: [{
          _type: 'span',
          _key: `span_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          text: trimmed.replace(/^# /, ''),
          marks: []
        }]
      };
    }
    
    if (trimmed.startsWith('## ')) {
      return {
        _type: 'block',
        _key: `block_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        style: 'h2',
        children: [{
          _type: 'span',
          _key: `span_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          text: trimmed.replace(/^## /, ''),
          marks: []
        }]
      };
    }
    
    // Paragrafo normale
    return {
      _type: 'block',
      _key: `block_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      style: 'normal',
      children: [{
        _type: 'span',
        _key: `span_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        text: trimmed,
        marks: []
      }]
    };
  });
}

// Funzione per creare un nuovo post
export async function createPost(postData: CreatePostData) {
  console.log('\n📝 Creating new post in Sanity...');
  console.log('Post data:', {
    title: postData.title,
    slug: postData.slug,
    hasContent: !!postData.content,
    hasAuthor: !!postData.author
  });

  try {
    // Verifica che non esista già un post con lo stesso slug
    const existingPost = await writeClient.fetch(
      `*[_type == "post" && (slug.current == $slug || slug == $slug)][0]`,
      { slug: postData.slug }
    );

    if (existingPost) {
      throw new Error(`Un post con slug "${postData.slug}" esiste già`);
    }

    // Prepara il documento per Sanity
    const document = {
      _type: 'post',
      title: postData.title,
      slug: {
        _type: 'slug',
        current: postData.slug
      },
      excerpt: postData.excerpt || '',
      body: contentToPortableText(postData.content),
      publishedAt: postData.publishedAt || new Date().toISOString(),
      featured: postData.featured || false,
      // Se fornito un autore, lo creiamo come reference o embedded
      ...(postData.author && {
        author: {
          _type: 'reference',
          _ref: await getOrCreateAuthor(postData.author)
        }
      }),
      // Se fornite categorie, le gestiamo
      ...(postData.categories && postData.categories.length > 0 && {
        categories: await Promise.all(
          postData.categories.map(cat => getOrCreateCategory(cat))
        ).then(refs => refs.map(ref => ({ _type: 'reference', _ref: ref })))
      })
    };

    console.log('📊 Document structure ready, creating post...');
    const result = await writeClient.create(document);
    
    console.log('✅ Post created successfully:', {
      id: result._id,
      title: result.title,
      slug: result.slug?.current || result.slug
    });

    return {
      success: true,
      post: result,
      message: 'Post creato con successo!'
    };

  } catch (error) {
    console.error('❌ Error creating post:', error);
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Errore sconosciuto',
      message: 'Errore durante la creazione del post'
    };
  }
}

// Funzione helper per creare o ottenere un autore
async function getOrCreateAuthor(authorData: { name: string; email?: string }): Promise<string> {
  console.log('👤 Getting or creating author:', authorData.name);
  
  try {
    // Cerca un autore esistente
    const existingAuthor = await writeClient.fetch(
      `*[_type == "author" && name == $name][0]`,
      { name: authorData.name }
    );

    if (existingAuthor) {
      console.log('✅ Found existing author:', existingAuthor._id);
      return existingAuthor._id;
    }

    // Crea un nuovo autore
    const newAuthor = await writeClient.create({
      _type: 'author',
      name: authorData.name,
      ...(authorData.email && { email: authorData.email })
    });

    console.log('✅ Created new author:', newAuthor._id);
    return newAuthor._id;

  } catch (error) {
    console.error('❌ Error with author:', error);
    throw error;
  }
}

// Funzione helper per creare o ottenere una categoria
async function getOrCreateCategory(categoryName: string): Promise<string> {
  console.log('🏷️  Getting or creating category:', categoryName);
  
  try {
    // Cerca una categoria esistente
    const existingCategory = await writeClient.fetch(
      `*[_type == "category" && title == $title][0]`,
      { title: categoryName }
    );

    if (existingCategory) {
      console.log('✅ Found existing category:', existingCategory._id);
      return existingCategory._id;
    }

    // Crea una nuova categoria
    const newCategory = await writeClient.create({
      _type: 'category',
      title: categoryName,
      description: `Categoria: ${categoryName}`
    });

    console.log('✅ Created new category:', newCategory._id);
    return newCategory._id;

  } catch (error) {
    console.error('❌ Error with category:', error);
    throw error;
  }
}

// Funzione per aggiornare un post esistente
export async function updatePost(postId: string, updateData: Partial<CreatePostData>) {
  console.log('\n✏️  Updating post:', postId);
  
  try {
    // Prepara i dati di aggiornamento
    const updateFields: any = {};

    if (updateData.title) updateFields.title = updateData.title;
    if (updateData.excerpt) updateFields.excerpt = updateData.excerpt;
    if (updateData.content) updateFields.body = contentToPortableText(updateData.content);
    if (updateData.featured !== undefined) updateFields.featured = updateData.featured;
    if (updateData.publishedAt) updateFields.publishedAt = updateData.publishedAt;

    const result = await writeClient.patch(postId).set(updateFields).commit();
    
    console.log('✅ Post updated successfully');
    return {
      success: true,
      post: result,
      message: 'Post aggiornato con successo!'
    };

  } catch (error) {
    console.error('❌ Error updating post:', error);
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Errore sconosciuto',
      message: 'Errore durante l\'aggiornamento del post'
    };
  }
}

// Funzione per eliminare un post
export async function deletePost(postId: string) {
  console.log('\n🗑️  Deleting post:', postId);
  
  try {
    await writeClient.delete(postId);
    
    console.log('✅ Post deleted successfully');
    return {
      success: true,
      message: 'Post eliminato con successo!'
    };

  } catch (error) {
    console.error('❌ Error deleting post:', error);
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Errore sconosciuto',
      message: 'Errore durante l\'eliminazione del post'
    };
  }
} 
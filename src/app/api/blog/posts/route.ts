import { NextRequest, NextResponse } from 'next/server';
import { createPost, createSafeSlug, type CreatePostData } from '~/lib/sanity-writer';
import { getAllPosts } from '~/lib/blog';

// GET - Ottieni tutti i post
export async function GET() {
  try {
    console.log('\n📚 API: Fetching all posts...');
    
    const posts = await getAllPosts();
    
    console.log(`✅ API: Successfully retrieved ${posts.length} posts`);
    
    return NextResponse.json({
      success: true,
      posts,
      total: posts.length
    });

  } catch (error) {
    console.error('❌ API Error fetching posts:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Errore durante il recupero dei post',
        details: error instanceof Error ? error.message : 'Errore sconosciuto'
      },
      { status: 500 }
    );
  }
}

// POST - Crea un nuovo post
export async function POST(request: NextRequest) {
  try {
    console.log('\n📝 API: Creating new post...');
    
    // Verifica il Content-Type
    const contentType = request.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        {
          success: false,
          error: 'Content-Type deve essere application/json'
        },
        { status: 400 }
      );
    }

    // Parse del body
    const body = await request.json();
    console.log('📊 Request body:', {
      title: body.title,
      hasContent: !!body.content,
      hasSlug: !!body.slug,
      categories: body.categories
    });

    // Validazione dei campi obbligatori
    if (!body.title) {
      return NextResponse.json(
        {
          success: false,
          error: 'Il titolo è obbligatorio'
        },
        { status: 400 }
      );
    }

    if (!body.content) {
      return NextResponse.json(
        {
          success: false,
          error: 'Il contenuto è obbligatorio'
        },
        { status: 400 }
      );
    }

    // Crea uno slug se non fornito
    const slug = body.slug || createSafeSlug(body.title);
    
    // Prepara i dati del post
    const postData: CreatePostData = {
      title: body.title,
      slug,
      excerpt: body.excerpt,
      content: body.content,
      author: body.author || {
        name: 'eDojo Team',
        email: 'aurelio.petrone@gmail.com'
      },
      categories: body.categories,
      featured: body.featured || false,
      publishedAt: body.publishedAt,
      mainImage: body.mainImage
    };

    console.log('🚀 Creating post with data:', {
      title: postData.title,
      slug: postData.slug,
      author: postData.author?.name,
      categories: postData.categories
    });

    // Crea il post
    const result = await createPost(postData);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error,
          message: result.message
        },
        { status: 400 }
      );
    }

    console.log('✅ API: Post created successfully');

    return NextResponse.json({
      success: true,
      message: result.message,
      post: result.post ? {
        id: result.post._id,
        title: result.post.title,
        slug: result.post.slug?.current || result.post.slug,
        createdAt: result.post._createdAt
      } : null
    }, { status: 201 });

  } catch (error) {
    console.error('❌ API Error creating post:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Errore durante la creazione del post',
        details: error instanceof Error ? error.message : 'Errore sconosciuto'
      },
      { status: 500 }
    );
  }
} 
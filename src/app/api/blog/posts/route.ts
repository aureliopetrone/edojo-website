import { NextRequest, NextResponse } from 'next/server';
import { blogDb } from '~/lib/blog-db';
import { getAllPosts } from '~/lib/blog';
import { getServerAuthSession } from '~/server/auth';

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
    
    // Verifica autenticazione
    const session = await getServerAuthSession();
    if (!session?.user?.id) {
      return NextResponse.json(
        {
          success: false,
          error: 'Utente non autenticato'
        },
        { status: 401 }
      );
    }

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
      featured: body.featured
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

    console.log('🚀 Creating post with data:', {
      title: body.title,
      slug: body.slug,
      featured: body.featured,
      userId: session.user.id
    });

    // Crea il post usando SQLite
    const result = await blogDb.createPost({
      title: body.title,
      content: body.content,
      excerpt: body.excerpt,
      slug: body.slug,
      featured: body.featured || false,
      userId: session.user.id
    });

    console.log('✅ API: Post created successfully');

    return NextResponse.json({
      success: true,
      message: 'Post creato con successo',
      post: {
        id: result.id.toString(),
        title: result.title,
        slug: result.slug,
        createdAt: result.createdAt.toISOString()
      }
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
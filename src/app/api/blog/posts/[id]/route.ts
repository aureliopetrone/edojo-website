import { NextRequest, NextResponse } from 'next/server';
import { getPostBySlug } from '~/lib/blog';
import { blogDb } from '~/lib/blog-db';
import { getServerAuthSession } from '~/server/auth';

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

// GET - Ottieni un singolo post per ID o slug
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    console.log(`\n🔍 API: Fetching post with ID/slug: ${id}`);
    
    // Se è un numero, cerca per ID, altrimenti per slug
    const isNumericId = !isNaN(Number(id));
    let post;
    
    if (isNumericId) {
      const dbPost = await blogDb.getPostBySlug(''); // placeholder - we need to add getPostById
      // For now, try by slug first
      post = await getPostBySlug(id);
    } else {
      post = await getPostBySlug(id);
    }
    
    if (!post) {
      return NextResponse.json(
        {
          success: false,
          error: 'Post non trovato'
        },
        { status: 404 }
      );
    }

    console.log('✅ API: Post found:', post.title);

    return NextResponse.json({
      success: true,
      post
    });

  } catch (error) {
    console.error('❌ API Error fetching post:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Errore durante il recupero del post',
        details: error instanceof Error ? error.message : 'Errore sconosciuto'
      },
      { status: 500 }
    );
  }
}

// PUT - Aggiorna un post esistente
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    console.log(`\n✏️  API: Updating post with ID: ${id}`);
    
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
    console.log('📊 Update data:', {
      title: body.title,
      hasContent: !!body.content,
      featured: body.featured
    });

    // Prepara i dati di aggiornamento
    const updateData: any = {};
    
    if (body.title) updateData.title = body.title;
    if (body.excerpt) updateData.excerpt = body.excerpt;
    if (body.content) updateData.content = body.content;
    if (body.featured !== undefined) updateData.featured = body.featured;
    if (body.published !== undefined) updateData.published = body.published;

    // Aggiorna il post usando SQLite
    const result = await blogDb.updatePost(parseInt(id), updateData);

    console.log('✅ API: Post updated successfully');

    return NextResponse.json({
      success: true,
      message: 'Post aggiornato con successo',
      post: {
        id: result.id.toString(),
        title: result.title,
        updatedAt: result.updatedAt.toISOString()
      }
    });

  } catch (error) {
    console.error('❌ API Error updating post:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Errore durante l\'aggiornamento del post',
        details: error instanceof Error ? error.message : 'Errore sconosciuto'
      },
      { status: 500 }
    );
  }
}

// DELETE - Elimina un post
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    console.log(`\n🗑️  API: Deleting post with ID: ${id}`);

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

    // Elimina il post usando SQLite
    await blogDb.deletePost(parseInt(id));

    console.log('✅ API: Post deleted successfully');

    return NextResponse.json({
      success: true,
      message: 'Post eliminato con successo'
    });

  } catch (error) {
    console.error('❌ API Error deleting post:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Errore durante l\'eliminazione del post',
        details: error instanceof Error ? error.message : 'Errore sconosciuto'
      },
      { status: 500 }
    );
  }
} 
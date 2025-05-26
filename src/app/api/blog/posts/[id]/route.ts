import { NextRequest, NextResponse } from 'next/server';
import { getPostBySlug } from '~/lib/blog';
import { updatePost, deletePost, type CreatePostData } from '~/lib/sanity-writer';

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
    
    // Proviamo prima come slug, poi come ID
    const post = await getPostBySlug(id);
    
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
    const updateData: Partial<CreatePostData> = {};
    
    if (body.title) updateData.title = body.title;
    if (body.excerpt) updateData.excerpt = body.excerpt;
    if (body.content) updateData.content = body.content;
    if (body.featured !== undefined) updateData.featured = body.featured;
    if (body.publishedAt) updateData.publishedAt = body.publishedAt;
    if (body.categories) updateData.categories = body.categories;

    // Aggiorna il post
    const result = await updatePost(id, updateData);

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

    console.log('✅ API: Post updated successfully');

    return NextResponse.json({
      success: true,
      message: result.message,
      post: result.post ? {
        id: result.post._id,
        title: result.post.title,
        updatedAt: result.post._updatedAt
      } : null
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

    // Elimina il post
    const result = await deletePost(id);

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

    console.log('✅ API: Post deleted successfully');

    return NextResponse.json({
      success: true,
      message: result.message
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
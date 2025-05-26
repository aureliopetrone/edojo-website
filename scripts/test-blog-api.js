#!/usr/bin/env node

/**
 * Script di test per le API del blog eDojo
 * Uso: npx tsx scripts/test-blog-api.js
 */

const API_BASE = 'http://localhost:3000/api/blog';
const API_KEY = 'edojo-blog-api-key-2024'; // Cambia in produzione

/**
 * Funzione helper per fare richieste HTTP
 * @param {string} url 
 * @param {object} options 
 */
async function makeRequest(url, options) {
  if (!options) options = {};
  
  try {
    const headers = {
      'Content-Type': 'application/json',
      'X-API-Key': API_KEY
    };
    
    if (options.headers) {
      Object.assign(headers, options.headers);
    }

    const response = await fetch(url, {
      headers,
      ...options
    });

    const data = await response.json();
    
    console.log(`\n🌐 ${options.method || 'GET'} ${url}`);
    console.log(`📊 Status: ${response.status}`);
    console.log(`📄 Response:`, JSON.stringify(data, null, 2));
    
    return { response, data };
  } catch (error) {
    console.error(`❌ Errore nella richiesta a ${url}:`, error?.message || error);
    return { error };
  }
}

// Test di pubblicazione automatica
async function testAutoPublish() {
  console.log('\n🚀 Test: Pubblicazione automatica');
  
  const postData = {
    title: 'Test Articolo Automatico - ' + new Date().toLocaleString(),
    content: `
# Questo è un articolo di test

Questo articolo è stato creato automaticamente tramite API per testare il sistema di pubblicazione automatica di eDojo.

## Caratteristiche del sistema

- Pubblicazione automatica tramite API
- Gestione automatica degli slug
- Supporto per categorie e autori
- Log dettagliati per debugging

## Contenuto di esempio

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    `.trim(),
    excerpt: 'Un articolo di test per verificare il funzionamento delle API di pubblicazione automatica.',
    categories: ['Test', 'API', 'Automazione'],
    featured: false,
    source: 'test-script'
  };

  return await makeRequest(`${API_BASE}/publish`, {
    method: 'POST',
    body: JSON.stringify(postData)
  });
}

// Test di lettura di tutti i post
async function testGetAllPosts() {
  console.log('\n📚 Test: Lettura di tutti i post');
  
  return await makeRequest(`${API_BASE}/posts`, {});
}

/**
 * Test di lettura di un singolo post
 * @param {string} slug 
 */
async function testGetSinglePost(slug) {
  console.log(`\n🔍 Test: Lettura del post "${slug}"`);
  
  return await makeRequest(`${API_BASE}/posts/${slug}`, {});
}

/**
 * Test di aggiornamento di un post
 * @param {string} postId 
 */
async function testUpdatePost(postId) {
  console.log(`\n✏️  Test: Aggiornamento del post "${postId}"`);
  
  const updateData = {
    featured: true,
    excerpt: 'Articolo aggiornato automaticamente tramite API di test - ' + new Date().toLocaleString()
  };

  return await makeRequest(`${API_BASE}/posts/${postId}`, {
    method: 'PUT',
    body: JSON.stringify(updateData)
  });
}

// Test delle info API
async function testApiInfo() {
  console.log('\n ℹ️  Test: Info API di pubblicazione');
  
  return await makeRequest(`${API_BASE}/publish`, {});
}

// Funzione principale di test
async function runTests() {
  console.log('🧪 Inizio test delle API del blog eDojo');
  console.log('=' .repeat(50));

  try {
    // Test 1: Info API
    await testApiInfo();

    // Test 2: Lettura post esistenti
    const { data: postsData } = await testGetAllPosts();

    // Test 3: Pubblicazione automatica
    const { data: publishData } = await testAutoPublish();
    
    if (publishData?.success && publishData?.post?.slug) {
      // Test 4: Lettura del post appena creato
      await testGetSinglePost(publishData.post.slug);
      
      // Test 5: Aggiornamento del post
      if (publishData.post.id) {
        await testUpdatePost(publishData.post.id);
      }
    }

    console.log('\n✅ Test completati con successo!');
    console.log('\n📝 Note:');
    console.log('- Assicurati che il server sia in esecuzione su localhost:3000');
    console.log('- Verifica che Sanity sia configurato con il token di scrittura');
    console.log('- Controlla i log del server per dettagli sui processi');

  } catch (error) {
    console.error('\n❌ Errore durante i test:', error);
  }
}

// Esegui i test direttamente
await runTests();

// Export per uso come modulo
export {
  makeRequest,
  testAutoPublish,
  testGetAllPosts,
  testGetSinglePost,
  testUpdatePost,
  testApiInfo,
  runTests
}; 
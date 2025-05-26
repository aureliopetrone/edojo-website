# Test Suite per Blog API

Questo directory contiene i test per le API del blog che ora utilizzano **SQLite** come database.

## File di Test

- `test-blog-api.js` - Test completi per tutte le API del blog

## Come Eseguire i Test

```bash
# Dalla root del progetto
cd test
node test-blog-api.js
```

## Prerequisiti

- Database SQLite configurato e popolato
- Server di sviluppo in esecuzione su porta 3000
- Utente autenticato per operazioni di scrittura

## Cosa Testano

- ✅ GET `/api/blog/posts` - Recupero di tutti i post
- ✅ GET `/api/blog/posts/[slug]` - Recupero post singolo
- ✅ POST `/api/blog/posts` - Creazione nuovo post (richiede auth)
- ✅ PUT `/api/blog/posts/[id]` - Aggiornamento post (richiede auth)
- ✅ DELETE `/api/blog/posts/[id]` - Eliminazione post (richiede auth)
- ✅ POST `/api/blog/publish` - Pubblicazione automatica

## Note

- I test di scrittura richiedono autenticazione
- Il database SQLite viene utilizzato per tutti i test
- I test sono non-distruttivi quando possibile 
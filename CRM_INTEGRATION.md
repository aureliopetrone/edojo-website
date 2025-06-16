# 🔗 Integrazione CRM

Questa documentazione descrive come configurare e utilizzare l'integrazione CRM per l'invio automatico dei lead dal form di contatto.

## 📋 Panoramica

Quando un utente compila il form di contatto sul sito web, il sistema:

1. ✅ Invia un'email di notifica (come prima)
2. ✅ Invia un'email di conferma al cliente (come prima)
3. ✅ **NUOVO:** Crea automaticamente un lead nel CRM (se configurato)

## ⚙️ Configurazione

### 1. Variabili d'ambiente

Aggiungi queste variabili al tuo file `.env`:

```bash
# CRM Integration (Opzionale)
CRM_API_URL="http://localhost:3001"
CRM_API_KEY="your_crm_api_key_here"
```

**Parametri:**
- `CRM_API_URL`: URL base del tuo CRM (includi protocollo e porta)
- `CRM_API_KEY`: API Key generata dal CRM per l'importazione leads

### 2. Generare l'API Key nel CRM

1. Accedi al tuo CRM
2. Vai su **Impostazioni** → **API Keys**
3. Clicca **"+ Genera nuova API Key"**
4. Copia la chiave generata
5. Inseriscila nella variabile `CRM_API_KEY`

### 3. Test della configurazione

Puoi testare se l'integrazione funziona:

```bash
# Test della validità dell'API Key
curl -H "Authorization: Bearer YOUR_API_KEY" \
     http://localhost:3001/api/leads/import
```

## 🔄 Come funziona

### Mapping dei campi

Il form di contatto mappa i campi così:

| Campo Form | Campo CRM | Note |
|------------|-----------|------|
| `name` | `firstName` + `lastName` | Il nome viene diviso automaticamente |
| `email` | `email` | Email del contatto |
| `phone` | `phone` | Telefono (opzionale) |
| `subject` + `message` | `description` | Combinati in un messaggio descrittivo |
| - | `lead_source` | Impostato automaticamente a "Website" |
| - | `status` | Impostato automaticamente a "NEW" |
| - | `type` | Impostato automaticamente a "DEMO" |

### Esempio di lead creato

```json
{
  "firstName": "Mario",
  "lastName": "Rossi",
  "email": "mario.rossi@example.com",
  "phone": "+39123456789",
  "description": "Messaggio dal sito web:\n\nSoggetto: Richiesta informazioni\n\nMessaggio:\nSalve, vorrei maggiori informazioni sui vostri servizi.",
  "lead_source": "Website",
  "status": "NEW",
  "type": "DEMO"
}
```

## 🛡️ Gestione errori

- Se l'integrazione CRM **non è configurata** → Il form continua a funzionare normalmente (solo email)
- Se l'integrazione CRM **fallisce** → L'email viene inviata ugualmente, l'errore viene loggato ma non blocca il processo
- Se l'**email fallisce** → Il processo si interrompe (come prima)

## 📊 Logging

Tutti gli eventi dell'integrazione CRM vengono loggati:

```
🔗 Tentativo di invio lead al CRM...
Dati lead per CRM: { firstName: "Mario", lastName: "Rossi", ... }
CRM Response: { success: true, message: "Lead imported successfully", ... }
✅ Lead inviato al CRM con successo!
```

In caso di errore:
```
⚠️ Errore nell'invio lead al CRM: CRM API Error (401): {"error":"Invalid API key"}
```

## 🔧 Disabilitare l'integrazione

Per disabilitare temporaneamente l'integrazione CRM:

1. Rimuovi o commenta le variabili nel `.env`
2. Oppure imposta valori vuoti:
   ```bash
   CRM_API_URL=""
   CRM_API_KEY=""
   ```

Il sistema rileverà automaticamente l'assenza della configurazione e salterà l'invio al CRM.

## 🔍 Troubleshooting

### Errore: "CRM non configurato"
**Causa:** Variabili `CRM_API_URL` o `CRM_API_KEY` non impostate
**Soluzione:** Verifica che le variabili siano presenti nel file `.env`

### Errore: "Invalid API key"
**Causa:** API Key non valida o scaduta
**Soluzione:** Genera una nuova API Key dal CRM

### Errore: "CRM API Error (404)"
**Causa:** URL del CRM non corretto
**Soluzione:** Verifica che `CRM_API_URL` punti al tuo CRM

### Errore: "Connection refused"
**Causa:** CRM non raggiungibile
**Soluzione:** Verifica che il CRM sia avviato e raggiungibile

## 📞 Supporto

Per problemi con l'integrazione CRM:
- Controlla i log della console per errori dettagliati
- Verifica che il CRM sia online e raggiungibile
- Testa l'API Key con una richiesta diretta 
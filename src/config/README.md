# Configurazione Centralizzata Azienda

Questo file contiene tutte le informazioni aziendali centralizzate che vengono utilizzate in tutti i componenti del sito.

## File: `company-info.ts`

### Struttura delle informazioni:

- **name**: Nome dell'azienda
- **address**: Indirizzo completo (strada, città, paese)
- **vatNumber**: Partita IVA
- **contact**: Informazioni di contatto (email, telefono, email specifica per prototipazione, WhatsApp)
- **copyright**: Copyright con anno dinamico
- **services**: Lista dei servizi con link
- **navigation**: Navigazione strutturata per header e footer
  - **navigation.header**: Links per la navigazione principale (sezioni homepage)
  - **navigation.footer**: Links per il footer (pagine e sezioni)

### Come utilizzare:

```typescript
import { companyInfo } from "~/config/company-info";

// Esempi di utilizzo
<h1>{companyInfo.name}</h1>
<p>{companyInfo.address.street}</p>
<a href={`mailto:${companyInfo.contact.email}`}>{companyInfo.contact.email}</a>
<p>{companyInfo.copyright}</p>

// Navigazione header
{companyInfo.navigation.header.map((item) => (
  <Link href={item.isSection ? `#${item.href}` : item.href}>
    {item.name}
  </Link>
))}

// Navigazione footer
{companyInfo.navigation.footer.map((item) => (
  <Link href={item.href}>{item.name}</Link>
))}
```

### Componenti aggiornati:

- `footer.tsx` - Footer principale (ora con 4 colonne + navigazione)
- `simple-footer.tsx` - Footer semplificato
- `contact-section.tsx` - Sezione contatti homepage
- `ai-contact-section.tsx` - Sezione contatti AI
- `rescue-contact-section.tsx` - Sezione contatti rescue
- `prototyping-contact-section.tsx` - Sezione contatti prototipazione

### Struttura Navigation:

#### Header Navigation
Per le sezioni della homepage, utilizza:
- `isSection: true` per indicare che è una sezione interna
- `href` contiene solo il nome della sezione (senza #)

#### Footer Navigation
Per la navigazione del footer, include:
- Link alle pagine principali (primi 6 elementi nella colonna Navigazione)
- Link legali/privacy (ultimi elementi nel footer bottom)

### Vantaggi:

1. **Centralizzazione**: Tutte le informazioni in un unico file
2. **Consistenza**: Stesse informazioni su tutto il sito
3. **Manutenibilità**: Modifiche in un solo posto
4. **Type Safety**: Tipizzazione TypeScript
5. **Aggiornamento automatico**: Anno del copyright sempre aggiornato
6. **Navigazione strutturata**: Header e footer separati logicamente

### Modifica delle informazioni:

Per aggiornare le informazioni aziendali, modifica solo il file `company-info.ts`. Le modifiche si rifletteranno automaticamente su tutto il sito. 
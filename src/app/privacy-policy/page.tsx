import { type Metadata } from "next";
import Header from "~/app/_components/header";
import Footer from "~/app/_components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy - eDojo",
  description: "Informativa sulla privacy e trattamento dei dati personali di eDojo",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Titolare del Trattamento</h2>
                <p className="text-gray-700 mb-4">
                  Il Titolare del trattamento dei dati è eDojo, con sede in Via Aldo Moro, 50, Solofra (AV), 
                  P.IVA 03030880649, contattabile all&apos;indirizzo email: aurelio.petrone@gmail.com
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Tipologie di Dati Raccolti</h2>
                <p className="text-gray-700 mb-4">
                  Tra i Dati Personali raccolti da questo sito web, in modo autonomo o tramite terze parti, ci sono:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Nome e cognome</li>
                  <li>Indirizzo email</li>
                  <li>Numero di telefono</li>
                  <li>Cookie e dati di utilizzo</li>
                  <li>Dati di navigazione (tramite Google Analytics)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Finalità del Trattamento</h2>
                <p className="text-gray-700 mb-4">
                  I dati personali sono trattati per le seguenti finalità:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Rispondere alle richieste di contatto</li>
                  <li>Fornire i servizi richiesti</li>
                  <li>Analizzare l&apos;utilizzo del sito web (solo con consenso)</li>
                  <li>Migliorare l&apos;esperienza utente</li>
                  <li>Adempiere agli obblighi legali</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Base Giuridica del Trattamento</h2>
                <p className="text-gray-700 mb-4">
                  Il trattamento dei dati personali si basa su:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Consenso dell&apos;interessato (per cookie di analisi)</li>
                  <li>Legittimo interesse (per rispondere alle richieste)</li>
                  <li>Esecuzione di un contratto o misure precontrattuali</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookie e Tecnologie di Tracciamento</h2>
                <p className="text-gray-700 mb-4">
                  Questo sito utilizza:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li><strong>Cookie tecnici:</strong> necessari per il funzionamento del sito</li>
                  <li><strong>Cookie di analisi:</strong> Google Analytics (solo con consenso) per analizzare l&apos;utilizzo del sito</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Puoi gestire le tue preferenze sui cookie tramite il banner presente sul sito.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Conservazione dei Dati</h2>
                <p className="text-gray-700 mb-4">
                  I dati personali sono conservati per il tempo strettamente necessario alle finalità per cui sono stati raccolti:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Dati di contatto: fino a 2 anni dalla raccolta</li>
                  <li>Dati di navigazione: fino a 26 mesi (Google Analytics)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Diritti dell&apos;Interessato</h2>
                <p className="text-gray-700 mb-4">
                  Hai il diritto di:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Accedere ai tuoi dati personali</li>
                  <li>Rettificare dati inesatti</li>
                  <li>Cancellare i tuoi dati</li>
                  <li>Limitare il trattamento</li>
                  <li>Portabilità dei dati</li>
                  <li>Opporti al trattamento</li>
                  <li>Revocare il consenso</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Per esercitare i tuoi diritti, contattaci all&apos;indirizzo: aurelio.petrone@gmail.com
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Sicurezza dei Dati</h2>
                <p className="text-gray-700 mb-4">
                  Adottiamo misure tecniche e organizzative appropriate per proteggere i dati personali 
                  da accessi non autorizzati, perdita, distruzione o divulgazione.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Modifiche alla Privacy Policy</h2>
                <p className="text-gray-700 mb-4">
                  Ci riserviamo il diritto di modificare questa Privacy Policy. Le modifiche saranno 
                  pubblicate su questa pagina con indicazione della data di ultimo aggiornamento.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contatti</h2>
                <p className="text-gray-700 mb-4">
                  Per qualsiasi domanda relativa a questa Privacy Policy o al trattamento dei tuoi dati personali, 
                  puoi contattarci:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Email: aurelio.petrone@gmail.com</li>
                  <li>Telefono: +39 371 302 8310</li>
                  <li>Indirizzo: Via Aldo Moro, 50, Solofra (AV)</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 
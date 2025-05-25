import { type Metadata } from "next";
import Header from "~/app/_components/header";
import Footer from "~/app/_components/footer";
import CookiePreferences from "~/app/_components/cookie-preferences";

export const metadata: Metadata = {
  title: "Preferenze Cookie - eDojo",
  description: "Gestisci le tue preferenze sui cookie per il sito eDojo",
};

export default function CookiePreferencesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Preferenze Cookie</h1>
              <p className="text-lg text-gray-600">
                Gestisci le tue preferenze sui cookie per personalizzare la tua esperienza sul nostro sito
              </p>
            </div>
            
            <CookiePreferences />
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Le tue preferenze verranno salvate localmente sul tuo dispositivo. 
                Puoi modificarle in qualsiasi momento tornando su questa pagina.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 
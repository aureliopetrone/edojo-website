import { type Metadata } from "next";
import Link from "next/link";
import Header from "~/app/_components/header";
import Footer from "~/app/_components/footer";

export const metadata: Metadata = {
  title: "Pagina non trovata - edojo",
  description: "La pagina che stai cercando non esiste. Torna alla home di edojo o esplora i nostri servizi.",
  robots: "noindex, nofollow",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-lg text-center">
          {/* Error Number */}
          <div className="mb-8">
            <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-secondary-500">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Pagina non trovata
            </h2>
            <p className="text-gray-600 leading-relaxed">
              La pagina che stai cercando non esiste o è stata spostata. 
              Torna alla home o esplora i nostri servizi.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Torna alla Home
            </Link>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/prototipazione"
                className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
              >
                Prototipazione
              </Link>
              <Link
                href="/ai-generativa"
                className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
              >
                AI Generativa
              </Link>
              <Link
                href="/consulenza"
                className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
              >
                Consulenza
              </Link>
              <Link
                href="/rescue"
                className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
              >
                Rescue Projects
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 
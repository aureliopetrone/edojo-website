import Link from "next/link";
import Image from "next/image";

export default function SimpleFooter() {
  return (
    <footer className="bg-neutral-900 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <Image
                src="/logo-nobg.png"
                alt="eDojo Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold text-neutral-50 group-hover:text-primary-400 transition-colors">
                e<span className="text-neutral-200">Dojo</span>
              </span>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <p className="text-neutral-300 mb-4">
              Hai domande sul progetto gratuito?
            </p>
            <div className="space-y-2">
              <p>
                <a 
                  href="mailto:info@edojo.it" 
                  className="text-primary-400 hover:text-primary-300 font-medium transition-colors"
                >
                  info@edojo.it
                </a>
              </p>
              <p>
                <a 
                  href="tel:+390825123456" 
                  className="text-primary-400 hover:text-primary-300 font-medium transition-colors"
                >
                  +39 0825 123456
                </a>
              </p>
            </div>
          </div>

          {/* Company Info */}
          <div className="mb-6 text-neutral-400 text-sm">
            <p>Via Aldo Moro, 50 - Solofra (AV)</p>
            <p>P.IVA 03030880649</p>
          </div>

          {/* Links */}
          <div className="flex items-center justify-center space-x-6 mb-6">
            <Link 
              href="/"
              className="text-sm text-neutral-400 hover:text-primary-300 transition-colors"
            >
              Sito Principale
            </Link>
            <Link 
              href="/#chi-siamo"
              className="text-sm text-neutral-400 hover:text-primary-300 transition-colors"
            >
              Chi Siamo
            </Link>
            <Link 
              href="/#contatti"
              className="text-sm text-neutral-400 hover:text-primary-300 transition-colors"
            >
              Contatti
            </Link>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-neutral-700">
            <p className="text-sm text-neutral-400">
              © 2024 eDojo. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 
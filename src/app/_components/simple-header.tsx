import Link from "next/link";
import BrandLogo from "./brand-logo";

export default function SimpleHeader() {
  return (
    <header className="fixed top-0 w-full glassmorphism-dark border-b border-primary-600/30 z-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <BrandLogo size="md" />
              <span className="text-4xl font-bold text-neutral-50 group-hover:text-neutral-200 transition-colors">
                edojo
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex items-center">
            <Link 
              href="#contatti"
              className="relative gradient-red-purple text-white hover:shadow-brand-bold px-8 py-3 text-sm font-bold transition-all duration-300 rounded-lg transform hover:scale-105"
            >
              <span className="relative z-10">Richiedi Audit</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 
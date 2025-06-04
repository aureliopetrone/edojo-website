import Link from "next/link";

export default function SimpleHeader() {
  return (
    <header className="fixed top-0 w-full bg-primary-600/95 backdrop-blur-sm border-b border-primary-700/50 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <span className="text-2xl font-bold text-neutral-50 group-hover:text-neutral-200 transition-colors">
                edojo
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex items-center">
            <Link 
              href="#form-progetto"
              className="bg-neutral-50 text-primary-600 hover:bg-neutral-100 px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm"
            >
              Contattaci
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 
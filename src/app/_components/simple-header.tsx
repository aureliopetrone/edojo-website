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
              href="#contatti"
              className="relative bg-black text-white hover:bg-neutral-900 px-6 py-2 text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl origami-button"
              style={{
                clipPath: 'polygon(0% 0%, calc(100% - 12px) 0%, 100% 100%, 12px 100%)',
                transform: 'perspective(1000px) rotateX(5deg)',
              }}
            >
              <span className="relative z-10">Richiedi Audit</span>
              <div 
                className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-black opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                  clipPath: 'polygon(0% 0%, calc(100% - 12px) 0%, 100% 100%, 12px 100%)',
                }}
              />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 
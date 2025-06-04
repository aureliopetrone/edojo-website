import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <h3 className="text-xl font-bold text-neutral-50">edojo</h3>
            </div>
            <div className="text-neutral-400 space-y-1">
              <p>Via Aldo Moro, 50</p>
              <p>Solofra (AV)</p>
              <p>P.IVA 03030880649</p>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-neutral-50 mb-4">Servizi</h4>
            <ul className="text-neutral-400 space-y-2">
              <li><Link href="#chi-siamo" className="hover:text-primary-300 transition-colors">Soluzioni Cloud & AI</Link></li>
              <li><Link href="#chi-siamo" className="hover:text-primary-300 transition-colors">IoT & Sistemi Connessi</Link></li>
              <li><Link href="#chi-siamo" className="hover:text-primary-300 transition-colors">Robotica & Automazione</Link></li>
              <li><Link href="#chi-siamo" className="hover:text-primary-300 transition-colors">WebApp Moderne</Link></li>
              <li><Link href="#chi-siamo" className="hover:text-primary-300 transition-colors">Gestionali Intelligenti</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-neutral-50 mb-4">Contatti</h4>
            <div className="text-neutral-400 space-y-2">
              <p>
                <Link href="mailto:info@edojo.it" className="hover:text-primary-300 transition-colors">
                  info@edojo.it
                </Link>
              </p>
              <p>
                <Link href="tel:+390825123456" className="hover:text-primary-300 transition-colors">
                  +39 0825 123456
                </Link>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-8 pt-8 text-center">
          <p className="text-neutral-400">
            © 2025 edojo. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
} 
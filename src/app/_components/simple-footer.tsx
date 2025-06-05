import Link from "next/link";
import { companyInfo } from "~/config/company-info";
import BrandLogo from "./brand-logo";

export default function SimpleFooter() {
  return (
    <footer className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 py-8 relative border-t border-primary-600/30">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-secondary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <BrandLogo size="lg" />
              <span className="text-2xl font-bold text-neutral-50 group-hover:text-gradient-red-purple transition-all duration-300">
                {companyInfo.name}
              </span>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <p className="text-neutral-300 mb-4">
              Contattaci per maggiori informazioni
            </p>
            <div className="space-y-2">
              <p>
                <a 
                  href={`mailto:${companyInfo.contact.email}`}
                  className="text-primary-400 hover:text-primary-300 font-medium transition-colors"
                >
                  {companyInfo.contact.email}
                </a>
              </p>
              <p>
                <a 
                  href={`tel:${companyInfo.contact.phone}`}
                  className="text-secondary-400 hover:text-secondary-300 font-medium transition-colors"
                >
                  {companyInfo.contact.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Company Info */}
          <div className="mb-6 text-neutral-400 text-sm">
            <p>{companyInfo.address.street} - {companyInfo.address.city}</p>
            <p>{companyInfo.vatNumber}</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-6">
            {companyInfo.navigation.footer.map((link, index) => (
              <Link 
                key={index}
                href={link.href}
                className="text-sm text-neutral-400 hover:text-primary-300 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-neutral-700/50">
            <p className="text-sm text-neutral-400">
              {companyInfo.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 
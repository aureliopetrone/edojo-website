import Link from "next/link";
import { companyInfo } from "~/config/company-info";

export default function SimpleFooter() {
  return (
    <footer className="bg-neutral-950 py-8 relative">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <span className="text-2xl font-bold text-neutral-50 group-hover:text-primary-400 transition-colors">
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
                  className="text-primary-400 hover:text-primary-300 font-medium transition-colors"
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
                className="text-sm text-neutral-400 hover:text-primary-300 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-neutral-700">
            <p className="text-sm text-neutral-400">
              {companyInfo.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 
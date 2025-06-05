import Link from "next/link";
import { companyInfo } from "~/config/company-info";
import BrandLogo from "./brand-logo";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 py-8 relative">
      <div className="mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <BrandLogo size="md" />
              <h3 className="text-xl font-bold text-neutral-50">{companyInfo.name}</h3>
            </div>
            <div className="text-neutral-400 space-y-1">
              <p>{companyInfo.address.street}</p>
              <p>{companyInfo.address.city}</p>
              <p>{companyInfo.vatNumber}</p>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-neutral-50 mb-4">Servizi</h4>
            <ul className="text-neutral-400 space-y-2">
              {companyInfo.services.map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="hover:text-primary-300 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-neutral-50 mb-4">Navigazione</h4>
            <ul className="text-neutral-400 space-y-2">
              {companyInfo.navigation.footer.slice(0, 6).map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-primary-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-neutral-50 mb-4">Contatti</h4>
            <div className="text-neutral-400 space-y-2">
              <p>
                <Link href={`mailto:${companyInfo.contact.email}`} className="hover:text-primary-300 transition-colors">
                  {companyInfo.contact.email}
                </Link>
              </p>
              <p>
                <Link href={`tel:${companyInfo.contact.phone}`} className="hover:text-primary-300 transition-colors">
                  {companyInfo.contact.phone}
                </Link>
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Section with Copyright and Additional Links */}
        <div className="border-t border-neutral-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 mb-4 md:mb-0">
              {companyInfo.copyright}
            </p>
            
            {/* Additional Footer Links */}
            <div className="flex space-x-6">
              {companyInfo.navigation.footer.slice(6).map((link, index) => (
                <Link 
                  key={index}
                  href={link.href} 
                  className="text-sm text-neutral-400 hover:text-primary-300 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
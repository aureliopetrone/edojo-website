import { companyInfo } from "~/config/company-info";

interface StructuredDataProps {
  type?: 'organization' | 'service' | 'webpage' | 'breadcrumb';
  title?: string;
  description?: string;
  url?: string;
  services?: string[];
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export default function StructuredData({ 
  type = 'organization', 
  title, 
  description, 
  url,
  services: _services,
  breadcrumbs 
}: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = companyInfo.baseUrl;
    
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "eDojo",
          "legalName": "eDojo",
          "description": "Tech Lab digitale specializzato in trasformazione digitale, sviluppo software e consulenza tecnologica",
          "url": baseUrl,
          "logo": `${baseUrl}/android-chrome-512x512.png`,
          "image": `${baseUrl}/android-chrome-512x512.png`,
          "telephone": companyInfo.contact.phone,
          "email": companyInfo.contact.email,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": companyInfo.address.street,
            "addressLocality": companyInfo.address.city.split(' ')[0] ?? '', // Solofra
            "addressRegion": "Campania",
            "postalCode": "83029",
            "addressCountry": "IT"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.8269",
            "longitude": "14.8515"
          },
          "sameAs": [
            companyInfo.social.linkedin
          ],
          "foundingDate": "2023",
          "numberOfEmployees": "3-10",
          "industry": "Information Technology",
          "serviceArea": {
            "@type": "Country",
            "name": "Italy"
          },
          "makesOffer": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Sviluppo Software",
                "description": "Sviluppo di applicazioni web e mobile personalizzate"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Consulenza Tecnica",
                "description": "Consulenza specializzata e team augmentation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "AI e Automazione",
                "description": "Soluzioni di intelligenza artificiale e automazione processi"
              }
            }
          ]
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": title,
          "description": description,
          "provider": {
            "@type": "Organization",
            "name": "eDojo",
            "url": baseUrl
          },
          "areaServed": {
            "@type": "Country",
            "name": "Italy"
          },
          "serviceType": "Technology Consulting",
          "url": url ?? baseUrl
        };

      case 'webpage':
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": title,
          "description": description,
          "url": url ?? baseUrl,
          "isPartOf": {
            "@type": "WebSite",
            "name": "eDojo",
            "url": baseUrl
          },
          "about": {
            "@type": "Organization",
            "name": "eDojo"
          },
          "mainEntity": {
            "@type": "Organization",
            "name": "eDojo"
          }
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbs?.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": crumb.url
          })) ?? []
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
} 
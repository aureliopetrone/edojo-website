import { type MetadataRoute } from 'next'
import { companyInfo } from '~/config/company-info'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = companyInfo.baseUrl

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/_next/',
        '/admin/',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
} 
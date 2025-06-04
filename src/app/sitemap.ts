import { type MetadataRoute } from 'next'
import { companyInfo } from '~/config/company-info'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = companyInfo.baseUrl
  const currentDate = new Date()

  // Genera dinamicamente le pagine dalla configurazione
  const routes: MetadataRoute.Sitemap = companyInfo.sitePages.map(page => ({
    url: `${baseUrl}${page.path}`,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  return routes
} 
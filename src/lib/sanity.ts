import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { apiVersion, dataset, projectId } from '../sanity/env'

export const client = createClient({
  projectId,
  dataset,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  apiVersion,
  token: process.env.SANITY_API_TOKEN, // Solo per operazioni write, optional per read
})

// Helper per generare URL delle immagini
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Helper per convertire content array di Sanity in testo semplice
export function portableTextToPlainText(blocks: any[] = []): string {
  return blocks
    .map((block: any) => {
      if (block._type === 'block' && block.children) {
        return block.children.map((child: any) => child.text).join('')
      }
      return ''
    })
    .join('\n\n')
}

// Query semplificate
export const getAllPostsQuery = `*[_type == "post"] | order(_createdAt desc)`

export const getPostBySlugQuery = `*[_type == "post" && slug == $slug][0]`

// Query per ottenere post in evidenza (assumiamo che i primi 3 siano featured)
export const getFeaturedPostsQuery = `
  *[_type == "post"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": coalesce(slug.current, slug),
    excerpt,
    author->{
      name,
      image
    },
    publishedAt,
    mainImage
  }
`

// Query per ottenere tutti gli slug (per static params)
export const getAllPostSlugsQuery = `
  *[_type == "post"] {
    "slug": coalesce(slug.current, slug)
  }
`

// Interfacce TypeScript
export interface SanityAuthor {
  name: string
  image?: any
  bio?: any[]
}

export interface SanityCategory {
  title: string
}

export interface SanityPost {
  _id: string
  title: string
  slug: string
  excerpt?: string
  body: any[]
  author?: SanityAuthor
  publishedAt?: string | null
  _createdAt: string
  _updatedAt?: string
  categories?: SanityCategory[]
  mainImage?: any
} 
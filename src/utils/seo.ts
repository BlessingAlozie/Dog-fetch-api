/**
 * SEO: updates document title and meta tags (description, Open Graph, Twitter Card).
 * Call from router or from a page component (e.g. blog post) for dynamic meta.
 */

const SITE_NAME = 'Luvie'
const DEFAULT_DESCRIPTION =
  'Book professional stylists, discover your perfect look with AI, and shop everything you need in one seamless app.'


function getOrigin(): string {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin
  }
  return (import.meta.env.VITE_SITE_ORIGIN as string) || 'https://luvie.com'
}

/** Ensure a URL is absolute (origin + path). */
function absoluteUrl(pathOrUrl: string, origin: string): string {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl
  }
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`
  return `${origin}${path}`
}

export interface SeoMeta {
  title: string
  description?: string
  /** Image path (e.g. /1.webp) or full URL. Used for og:image and twitter:image. */
  ogImage?: string
  /** Optional canonical path (e.g. /features). Defaults to current path. */
  canonicalPath?: string
  /** og:type. Default 'website'. Use 'article' for blog posts. */
  ogType?: 'website' | 'article'
}

function setMetaTag(
  attr: 'name' | 'property',
  key: string,
  content: string,
  doc: Document = document
): void {
  let el = doc.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
  if (!el) {
    el = doc.createElement('meta')
    el.setAttribute(attr, key)
    doc.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLinkRel(rel: string, href: string, doc: Document = document): void {
  let el = doc.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = doc.createElement('link')
    el.setAttribute('rel', rel)
    doc.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Update document head with title and meta tags for SEO and social sharing.
 * Safe to call on every route change or when dynamic content (e.g. blog post) loads.
 */
export function updateHead(meta: SeoMeta, path: string = '/'): void {
  const origin = getOrigin()
  const title = meta.title.includes(SITE_NAME) ? meta.title : `${meta.title} | ${SITE_NAME}`
  const description = meta.description ?? DEFAULT_DESCRIPTION
  const ogImage = meta.ogImage ? absoluteUrl(meta.ogImage, origin) : absoluteUrl('/images/1.webp', origin)
  const canonicalPath = meta.canonicalPath ?? path
  const canonicalUrl = canonicalPath.startsWith('http') ? canonicalPath : `${origin}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`
  const ogType = meta.ogType ?? 'website'

  document.title = title

  setMetaTag('name', 'description', description)
  setMetaTag('property', 'og:title', title)
  setMetaTag('property', 'og:description', description)
  setMetaTag('property', 'og:image', ogImage)
  setMetaTag('property', 'og:url', canonicalUrl)
  setMetaTag('property', 'og:type', ogType)
  setMetaTag('property', 'og:site_name', SITE_NAME)
  setMetaTag('property', 'og:locale', 'en_US')

  setMetaTag('name', 'twitter:card', 'summary_large_image')
  setMetaTag('name', 'twitter:title', title)
  setMetaTag('name', 'twitter:description', description)
  setMetaTag('name', 'twitter:image', ogImage)

  setLinkRel('canonical', canonicalUrl)
}

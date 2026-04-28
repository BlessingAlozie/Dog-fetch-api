/**
 * SEO: updates document title and meta tags for Blessing Alozie's Portfolio.
 */

// 1. Update branding constants
const SITE_NAME = 'Blessing Alozie'
const DEFAULT_DESCRIPTION =
  'Portfolio of Blessing Alozie — UI/UX Designer and Product Builder focused on fintech, web apps, and modern user experiences.'

function getOrigin(): string {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin
  }
  // Update your production domain here
  return (import.meta.env.VITE_SITE_ORIGIN as string) || 'https://your-portfolio.com'
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
  ogImage?: string
  canonicalPath?: string
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

export function updateHead(meta: SeoMeta, path: string = '/'): void {
  const origin = getOrigin()

  // 2. Format title: "Page Name | Blessing Alozie"
  const title = meta.title.includes(SITE_NAME) ? meta.title : `${meta.title} | ${SITE_NAME}`
  const description = meta.description ?? DEFAULT_DESCRIPTION

  // 3. Set a default OG image (e.g., your headshot or a portfolio preview)
  const ogImage = meta.ogImage ? absoluteUrl(meta.ogImage, origin) : absoluteUrl('/preview.png', origin)

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

import imageUrlBuilder from '@sanity/image-url'
import type { Image } from '@sanity/types'
import type { Article, PageModulaire, Project } from '~/types/schema'

export function _formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function urlFor(source: Image) {
  const sanity = useSanity()
  const builder = imageUrlBuilder(sanity.client)
  return builder.image(source)
}

export function _linkResolver(doc: Project | PageModulaire | Article) {
  if (!doc.slug) return '/'

  switch (doc._type) {
    case 'project':
      // return `/projet/${doc.slug.current}`
      return _resolveProjectUrl(doc)
    case 'pageModulaire':
      return `/${doc.slug.current}`
    default:
      return '/'
  }
}

const _resolveProjectUrl = (doc: Project) => {
  if (!doc.slug) return '/'
  const tag = doc.tag?.slug?.current
  return tag ? `/${tag}/${doc.slug.current}` : `/`
}

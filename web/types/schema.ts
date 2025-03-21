export declare type SanityReference<T> = T & {
  _ref: string
}

export declare type SanityKeyedReference<T> = T & {
  _key: string
  _ref: string
}

import type {
  // SanityReference,
  // SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from 'sanity-codegen'

export type {
  // SanityReference,
  // SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
}

/**
 * Réglages (header, footer, ...)
 *
 *
 */
export interface Settings extends SanityDocument {
  _type: 'settings'

  /**
   * Nom du site — `string`
   *
   *
   */
  siteName?: string

  /**
   * Naviguation Primary — `array`
   *
   *
   */
  navPrimary?: Array<SanityKeyed<LinkInternal> | SanityKeyed<LinkExternal>>

  /**
   * Naviguation Secondary — `array`
   *
   *
   */
  navSecondary?: Array<SanityKeyed<LinkInternal> | SanityKeyed<LinkExternal>>

  /**
   * Message 404 — `blockContent`
   *
   *
   */
  message404?: BlockContent

  /**
   * customCss — `text`
   *
   *
   */
  customCss?: string
}

/**
 * Page Modulaire
 *
 *
 */
export interface PageModulaire extends SanityDocument {
  _type: 'pageModulaire'

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo

  /**
   * homePage — `boolean`
   *
   *
   */
  homePage?: boolean

  /**
   * Titre — `localeString`
   *
   * Le nom de la page
   */
  title?: LocaleString

  /**
   * Slug — `slug`
   *
   * URL basée sur le titre (sans espace ni caractère autre que a-z-0-9
   */
  slug?: { _type: 'slug'; current: string }

  /**
   * Soustitre — `localeString`
   *
   *
   */
  subTitle?: LocaleString

  /**
   * Image clef — `image`
   *
   * Visible on liste pages, project cards (largeur 1400px)
   */
  imageCover?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Modules — `array`
   *
   * Zone de contenu Modulaire (images, textes, embed)
   */
  modules?: Array<
    | SanityKeyed<TextUI>
    | SanityKeyed<ListProjectsUI>
    | SanityKeyed<ListArticlesUI>
  >
}

/**
 * Project
 *
 *
 */
export interface Project extends SanityDocument {
  _type: 'project'

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo

  /**
   * Titre — `localeString`
   *
   *
   */
  title?: LocaleString

  /**
   * Slug — `slug`
   *
   * URL basée sur le titre (sans espace ni caractère autre que a-z-0-9
   */
  slug?: { _type: 'slug'; current: string }

  /**
   * Tag — `reference`
   *
   *
   */
  tag?: SanityReference<Tag>

  /**
   * Image clef — `image`
   *
   * Visible on liste pages, project cards (largeur 1400px)
   */
  imageCover?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * fiche technique — `array`
   *
   *
   */
  metas?: Array<SanityKeyed<KeyVal>>

  /**
   * Texte — `localeBlockContent`
   *
   *
   */
  text?: LocaleBlockContent

  /**
   * Slider — `array`
   *
   *
   */
  slider?: Array<
    SanityKeyed<{
      _type: 'image'
      asset: SanityReference<SanityImageAsset>
      crop?: SanityImageCrop
      hotspot?: SanityImageHotspot
    }>
  >
}

/**
 * Tag
 *
 *
 */
export interface Tag extends SanityDocument {
  _type: 'tag'

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString

  /**
   * Slug — `slug`
   *
   * URL basée sur le titre (sans espace ni caractère autre que a-z-0-9
   */
  slug?: { _type: 'slug'; current: string }
}

/**
 * Article
 *
 *
 */
export interface Article extends SanityDocument {
  _type: 'article'

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString

  /**
   * Slug — `slug`
   *
   * URL basée sur le titre (sans espace ni caractère autre que a-z-0-9
   */
  slug?: { _type: 'slug'; current: string }

  /**
   * date — `date`
   *
   *
   */
  date?: string

  /**
   * Image clef — `image`
   *
   * Visible on liste pages, project cards (largeur 1400px)
   */
  imageCover?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Texte — `localeBlockContent`
   *
   *
   */
  text?: LocaleBlockContent

  /**
   * link — `linkInternal`
   *
   *
   */
  link?: LinkInternal
}

export type LocaleString = {
  _type: 'localeString'
  /**
   * Français — `string`
   *
   *
   */
  fr?: string

  /**
   * English — `string`
   *
   *
   */
  en?: string
}

export type LocaleBlockContent = {
  _type: 'localeBlockContent'
  /**
   * Français — `blockContent`
   *
   *
   */
  fr?: BlockContent

  /**
   * English — `blockContent`
   *
   *
   */
  en?: BlockContent
}

export type BlockContent = Array<SanityKeyed<SanityBlock>>

export type LinkExternal = {
  _type: 'linkExternal'
  /**
   * Label — `string`
   *
   *
   */
  label?: string

  /**
   * Link — `string`
   *
   *
   */
  link?: string
}

export type LinkInternal = {
  _type: 'linkInternal'
  /**
   * label — `localeString`
   *
   *
   */
  label?: LocaleString

  /**
   * link — `reference`
   *
   *
   */
  link?: SanityReference<PageModulaire | Project | Article>
}

export type Seo = {
  _type: 'seo'
  /**
   * Meta title — `string`
   *
   *
   */
  metaTitle?: string

  /**
   * Meta description — `string`
   *
   *
   */
  metaDescription?: string

  /**
   * Meta image — `image`
   *
   *
   */
  metaImage?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }
}

export type KeyVal = {
  _type: 'keyVal'
  /**
   * Clef — `string`
   *
   *
   */
  key?: string

  /**
   * Valeur — `localeBlockContent`
   *
   *
   */
  val?: LocaleBlockContent
}

export type Figure = {
  _type: 'figure'
  /**
   * Image — `image`
   *
   * jpg, 1400px de large, 72dpi
   */
  image?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot

    /**
     * Alt Description — `string`
     *
     *
     */
    alt?: string
  }

  /**
   * Caption — `string`
   *
   *
   */
  caption?: string
}

export type TextUI = {
  _type: 'textUI'
  /**
   * title — `string`
   *
   * Module title (displayed only in the admin)
   */
  title?: string

  /**
   * Text — `localeBlockContent`
   *
   *
   */
  text?: LocaleBlockContent
}

export type ListProjectsUI = {
  _type: 'listProjectsUI'
  /**
   * title — `string`
   *
   *
   */
  title?: string

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyedReference<Project>>
}

export type ListArticlesUI = {
  _type: 'listArticlesUI'
  /**
   * title — `string`
   *
   *
   */
  title?: string

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyedReference<Article>>
}

export type Documents = Settings | PageModulaire | Project | Tag | Article

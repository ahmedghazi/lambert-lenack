import {defineField, defineArrayMember, defineType} from 'sanity'
import {FolderIcon} from '@sanity/icons'
import modulesList from '../objects/modules/modulesList'
import {baseLanguage} from '../locale/supportedLanguages'

export default defineType({
  type: 'document',
  name: 'project',
  title: 'Project',
  icon: FolderIcon,
  groups: [
    {
      default: true,
      name: 'editorial',
      title: 'Editorial',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }),
    defineField({
      name: 'title',
      type: 'localeString',
      title: 'Titre',
      group: 'editorial',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL basée sur le titre (sans espace ni caractère autre que a-z-0-9',
      options: {
        source: `title.${baseLanguage}`,
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: 'editorial',
    }),

    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'reference',
      to: [{type: 'tag'}],
      group: 'editorial',
    }),

    defineField({
      name: 'imageCover',
      type: 'image',
      title: 'Image clef',
      description: 'Visible on liste pages, project cards (largeur 1400px)',
      group: 'editorial',
    }),

    // defineField({
    //   name: 'chapo',
    //   title: 'Chapo',
    //   type: 'localeBlockContent',
    //   group: 'editorial',
    // }),

    defineField({
      name: 'metas',
      title: 'fiche technique',
      type: 'array',
      of: [{type: 'keyVal'}],
      // description: 'fiche technique',
      group: 'editorial',
    }),

    defineField({
      name: 'text',
      title: 'Texte',
      type: 'localeBlockContent',
      group: 'editorial',
    }),

    defineField({
      name: 'slider',
      title: 'Slider',
      description: '',
      type: 'array',
      of: [{type: 'image'}],
      group: 'editorial',
    }),
  ],

  preview: {
    select: {
      title: `title.${baseLanguage}`,
      slug: 'slug.current',
      seo: 'seo',
      tag: 'tag.slug.current',
    },
    prepare(selection) {
      const {title, slug, seo, tag} = selection
      console.log('seo')
      return {
        title: seo ? seo.metaTitle : `${title} (Veuillez choisir un titre dans l'onglet SEO)`,
        media: seo && seo.image && seo.image,
        subtitle: `/${tag}/${slug}`,
      }
    },
  },
})

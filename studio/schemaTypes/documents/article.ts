import {defineField, defineType} from 'sanity'
import {FaFeather} from 'react-icons/fa'
import {baseLanguage} from '../locale/supportedLanguages'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  icon: FaFeather,
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
      name: 'title',
      title: 'Title',
      type: 'localeString',
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
      name: 'date',
      title: 'date',
      type: 'date',
      group: 'editorial',
      options: {
        dateFormat: 'DD/MM/YYYY',
        // timeFormat: 'HH:mm',
        // timeStep: 15,
        // calendarTodayLabel: 'Today'
      },
    }),
    defineField({
      name: 'imageCover',
      type: 'image',
      title: 'Image clef',
      description: 'Visible on liste pages, project cards (largeur 1400px)',
      group: 'editorial',
    }),
    defineField({
      name: 'text',
      title: 'Texte',
      type: 'localeBlockContent',
      group: 'editorial',
    }),
    defineField({
      name: 'link',
      type: 'linkInternal',
      group: 'editorial',
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLanguage}`,
      subtitle: 'slug.current',
    },
  },
})

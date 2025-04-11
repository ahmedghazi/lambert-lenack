import {defineField} from 'sanity'
import {ThListIcon} from '@sanity/icons'

export default defineField({
  name: 'listProjectsUI',
  title: 'List Projets UI',
  type: 'object',
  icon: ThListIcon,

  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),

    defineField({
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'project'}],
        },
      ],
      options: {
        // layout: 'grid',
        sortable: true,
        // direction: 'horizontal',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'items.0.imageCover',
      length: 'items.length',
    },
    prepare(selection) {
      const {title, media, length} = selection
      return {
        title: 'List Projets UI',
        // subtitle: 'List Projets UI',
        // subtitle: `${length} projets`,
        media: media,
      }
    },
  },
})

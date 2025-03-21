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
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        subtitle: 'List Projets UI',
      }
    },
  },
})

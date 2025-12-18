import {defineField} from 'sanity'
import {BiCarousel} from 'react-icons/bi'

export default defineField({
  name: 'sliderArticlesUI',
  title: 'Slider Articles UI',
  type: 'object',
  icon: BiCarousel,

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
          to: [{type: 'article'}],
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
        subtitle: 'Slider Articles UI',
      }
    },
  },
})

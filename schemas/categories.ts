import {defineField, defineType} from 'sanity'
import {MdPerson as icon} from 'react-icons/md'

export default defineType({
  name: 'categories',
  title: 'Categorias',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Nombre de la categoria',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Imagen de la categoria',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
})

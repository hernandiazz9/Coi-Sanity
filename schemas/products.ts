import { defineField, defineType } from 'sanity';
import { MdLocalMovies as icon } from 'react-icons/md';

export default defineType({
  name: 'products',
  title: 'Productos',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Titulo',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'blockContent',
    }),
    // defineField({
    //   name: 'releaseDate',
    //   title: 'Release date',
    //   type: 'datetime',
    // }),
    defineField({
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'externalId',
      title: 'External ID',
      type: 'number',
    }),
    defineField({
      name: 'categories',
      title: 'Categorias',
      type: 'array',
      // of: [{ type: 'categories' }],
      of: [
        {
          type: 'reference',
          to: [
            {type: 'categories'},
          ]
        }
      ]
    }),
    // defineField({
    //   name: 'crewMembers',
    //   title: 'Crew Members',
    //   type: 'array',
    //   of: [{type: 'crewMember'}],
    // }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'releaseDate',
      media: 'poster',
      castName0: 'castMembers.0.person.name',
      castName1: 'castMembers.1.person.name',
    },
    prepare(selection) {
      const year = selection.date && selection.date.split('-')[0];
      const cast = [selection.castName0, selection.castName1]
        .filter(Boolean)
        .join(', ');

      return {
        title: `${selection.title} ${year ? `(${year})` : ''}`,
        date: selection.date,
        subtitle: cast,
        media: selection.media,
      };
    },
  },
});

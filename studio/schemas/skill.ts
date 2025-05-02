import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Habilidades',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      description: 'Nombre de la habilidad o categoría',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'level',
      title: 'Nivel',
      type: 'string',
      options: {
        list: [
          {title: 'Principiante', value: 'beginner'},
          {title: 'Intermedio', value: 'intermediate'},
          {title: 'Avanzado', value: 'advanced'},
          {title: 'Experto', value: 'expert'},
        ],
      },
    }),
    defineField({
      name: 'keywords',
      title: 'Palabras clave',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Tecnologías o herramientas relacionadas',
    }),
    defineField({
      name: 'icon',
      title: 'Icono',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Logo o ícono representativo (opcional)',
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          {title: 'Frontend', value: 'frontend'},
          {title: 'Backend', value: 'backend'},
          {title: 'Lenguajes', value: 'languages'},
          {title: 'Frameworks', value: 'frameworks'},
          {title: 'Bases de datos', value: 'databases'},
          {title: 'Herramientas', value: 'tools'},
          {title: 'Diseño', value: 'design'},
          {title: 'DevOps', value: 'devops'},
          {title: 'Soft Skills', value: 'soft-skills'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Orden',
      type: 'number',
      description: 'Orden de aparición (números menores aparecen primero)',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'icon',
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle: subtitle ? `${subtitle.charAt(0).toUpperCase() + subtitle.slice(1)}` : '',
        media,
      }
    },
  },
})
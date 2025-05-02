import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Proyectos',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'featured',
      title: 'Destacado',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'summary',
      title: 'Resumen',
      type: 'text',
      description: 'Breve descripción del proyecto',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción Completa',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'images',
      title: 'Imágenes Adicionales',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'technologies',
      title: 'Tecnologías',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Tecnologías utilizadas en el proyecto',
    }),
    defineField({
      name: 'liveUrl',
      title: 'URL del Proyecto',
      type: 'url',
      description: 'Enlace al proyecto en vivo',
    }),
    defineField({
      name: 'repositoryUrl',
      title: 'URL del Repositorio',
      type: 'url',
      description: 'Enlace al código fuente',
    }),
    defineField({
      name: 'startDate',
      title: 'Fecha de Inicio',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
    defineField({
      name: 'endDate',
      title: 'Fecha de Finalización',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
    defineField({
      name: 'projectType',
      title: 'Tipo de Proyecto',
      type: 'string',
      options: {
        list: [
          {title: 'Personal', value: 'personal'},
          {title: 'Cliente', value: 'client'},
          {title: 'Trabajo', value: 'work'},
          {title: 'Código Abierto', value: 'open-source'},
          {title: 'Educativo', value: 'educational'},
        ],
      },
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
      subtitle: 'projectType',
      media: 'mainImage',
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
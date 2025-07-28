import { defineType, defineField } from 'sanity'

export const aktualita = defineType({
    name: 'aktualita',
    title: 'Aktualita',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Nadpis',
            type: 'string',
            validation: Rule => Rule.required(),
            initialValue: ''  // <- přidejte prázdný string
        }),

        defineField({
            name: 'text',
            title: 'Obsah',
            type: 'text',
            initialValue: ''  // <- přidejte prázdný string
        }),

        defineField({
            name: 'image',
            title: 'Fotka',
            type: 'image',
            options: {
                hotspot: true
            }
        }),

        defineField({
            name: 'publishedAt',
            title: 'Datum publikování',
            type: 'datetime',
            initialValue: () => new Date().toISOString()
        })
    ],

    preview: {
        select: {
            title: 'title',
            media: 'image'
        }
    }
})
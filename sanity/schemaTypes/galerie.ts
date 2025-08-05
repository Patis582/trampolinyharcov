import { defineType, defineField } from 'sanity'
import { text } from 'stream/consumers'

export const galerie = defineType({
    name: 'galerie',
    title: 'gallery',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Název',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'thumbnail',
            title: 'Náhledová fotka',
            type: 'image',
            description: 'Hlavní fotka, která se zobrazí v náhledu galerie na webu',
            options:{
                hotspot: true,
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'text',
            title: 'Popis či text v galerii',
            type: 'text'
        }),
        defineField({
            name: 'odkaz',
            title: 'Pokud chcete odkaz zde',
            type: 'string'
        }),
        defineField({
            name: 'images',
            title: 'Fotky všechny',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternativní text',
                            description: 'Povinný popis obrázku. Nejlépe dvěmi slovy např. Obrázek harcov',
                            validation: Rule => Rule.required()
                        }
                    ]
                }
            ],
            validation: Rule => Rule.min(1).error('Galerie musí obsahovat alespoň jeden obrázek')
        }),
        defineField({
            name: 'publishedAt',
            title: 'Datum publikování',
            type: 'datetime',
            initialValue: () => new Date().toISOString()
        })
    ],
    orderings: [
        {
            title: 'Datum publikování, nejnovější',
            name: 'publishedAtDesc',
            by: [{ field: 'publishedAt', direction: 'desc' }]
        }
    ]
})
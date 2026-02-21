import { defineType, defineField } from 'sanity'

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
            type: 'string',
            validation: Rule => Rule.custom((value, { document }) => {
               
                if (document?.['odkazText'] && !value) {
                    return 'Vyplňte odkaz, když je vyplněn text k odkazu';
                }
                return true;
            })
        }),
        defineField({
            name: 'odkazText',
            title: 'text k odkazu',
            description: 'např: Odkaz na video',
            type: 'string',
            validation: Rule => Rule.custom((value, { document }) => {
                
                if (document?.odkaz && !value) {
                    return 'Vyplňte text k odkazu, když je vyplněn odkaz';
                }
                return true;
            })
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
                        accept: 'image/*',
                        sources: ['media'] // Umožní výběr z media library
                    },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternativní text',
                            description: 'Povinný popis obrázku. Nejlépe dvěmi slovy např. Obrázek harcov',
                            initialValue: 'galerie fotka',
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
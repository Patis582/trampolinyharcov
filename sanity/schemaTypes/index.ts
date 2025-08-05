import { type SchemaTypeDefinition } from 'sanity'
import { aktualita } from './aktualita'
import { galerie } from './galerie'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [aktualita, galerie],
}

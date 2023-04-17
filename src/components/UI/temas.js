import {
  contenidoClaro,
  contenidoOscuro,
  fondoClaro,
  fondoOscuro,
  textoFondoClaro,
  textoFondoOscuro,
} from './Variables'

export const temaClaro = {
  body: fondoClaro,
  text: textoFondoClaro,
  inside: contenidoClaro,
  filter: ''
}
export const temaOscuro = {
  body: fondoOscuro,
  text: textoFondoOscuro,
  inside: contenidoOscuro,
  filter: 'invert(100%)'
}

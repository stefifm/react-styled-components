import { IconTheme } from './components/UI'
import alimentacion from './assets/images/alimentacion.svg'
import otros from './assets/images/otros.svg'
import salud from './assets/images/salud.svg'
import transporte from './assets/images/transporte.svg'
import utilidades from './assets/images/utilidades.svg'

export default (type) => {
  const Images = {
    Restaurante: (
      <IconTheme
        src={alimentacion}
        alt='Restaurante'
      />
    ),
    Salud: (
      <IconTheme
        src={salud}
        alt='Salud'
      />
    ),
    Transporte: (
      <IconTheme
        src={transporte}
        alt='Transporte'
      />
    ),
    Utilidades: (
      <IconTheme
        src={utilidades}
        alt='Utilidades'
      />
    ),
    default: (
      <IconTheme
        src={otros}
        alt='Otros'
      />
    ),
  }

  return Images[type] || Images.default
}

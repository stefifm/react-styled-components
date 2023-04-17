import PropTypes from 'prop-types'
import themeOff from '../../assets/images/themeOff.svg'
import themeOn from '../../assets/images/themeOn.svg'
import { Icon } from '../UI'

function SwitcherTema({ tema }) {
  const claro = (
    <Icon
      src={themeOn}
      alt='Tema Claro'
    />
  )
  const oscuro = (
    <Icon
      src={themeOff}
      alt='Tema Oscuro'
    />
  )
  return <>{tema ? oscuro : claro}</>
}

SwitcherTema.propTypes = {
  tema: PropTypes.bool.isRequired,
}

export default SwitcherTema

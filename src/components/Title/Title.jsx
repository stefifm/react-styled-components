import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = styled.h1`
  padding: 25px 0;
`

Title.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Title

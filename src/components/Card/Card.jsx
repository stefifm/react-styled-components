import PropTypes from 'prop-types'
import styled from 'styled-components'
import ImageFilter from '../../ImageFilter'

const Card = styled.div`
  box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  font-size: 12px;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  .type {
    font-weight: bold;
  }
`

function CardComponent({ cargo }) {
  const { type, value, from, date } = cargo
  return (
    <Card>
      {ImageFilter(type)}
      <Info>
        <span className='type'> {type} </span>
        <span> {from} </span>
        <span> {value} </span>
      </Info>
      <span> {date} </span>
    </Card>
  )
}

CardComponent.propTypes = {
  cargo: PropTypes.object.isRequired,
}

export default CardComponent

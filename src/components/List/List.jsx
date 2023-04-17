import { Box, Btn } from '../UI'
import { lista } from '../../info'
import CardComponent from '../Card/Card'

function List() {
  return (
    <Box>
      {lista.cargos.map((cargo, i) => (
        <CardComponent
          key={i}
          cargo={cargo}
        />
      ))}
      <Btn>Ver más</Btn>
    </Box>
  )
}

export default List

import styled from 'styled-components'
import Account from '../Account/Account'
import Title from '../Title/Title'
import List from '../List/List'

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`

const StyledContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

function Container() {
  return (
    <StyledContainer>
      <Title>Smart Bank</Title>
      <StyledContent>
        <Account />
        <List />
      </StyledContent>
    </StyledContainer>
  )
}

export default Container

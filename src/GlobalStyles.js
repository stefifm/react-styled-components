import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: ${({theme}) => theme.text};
}

`

export default GlobalStyles
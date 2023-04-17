import { ThemeProvider } from 'styled-components'
import Container from './components/Container/Container'
import Header from './components/Header/Header'
import GlobalStyles from './GlobalStyles'
import { temaClaro, temaOscuro } from './components/UI/temas'
import SwitcherTema from './components/SwitcherTema/SwitcherTema'
import { BtnTema } from './components/UI'
import { useEffect, useState } from 'react'

function App() {
  const [tema, setTema] = useState(JSON.parse(localStorage.getItem('tema')) ?? true)
  const toggleTema = () => {
    setTema(!tema)
    localStorage.setItem('tema', JSON.stringify(!tema))
  }

  useEffect(() => {
    const currentTema = JSON.parse(localStorage.getItem('tema'))
    if (currentTema) {
      setTema(currentTema)
    }
  }, [])
  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
      <GlobalStyles />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  )
}

export default App

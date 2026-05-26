import { useState } from 'react'
import './App.css'

//importação do componente de rotas
import Rotas from './rotas/Rotas'

//import o browser router do react router dom
import { BrowserRouter } from 'react-router-dom' // permite o uso das rotas, é o componente que envolve toda a aplicação para que as rotas funcionem

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Aula 34</h1>

      <BrowserRouter>
        <Rotas/>
      </BrowserRouter>
    </>
  )
}

export default App

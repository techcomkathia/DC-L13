import { useState } from 'react'
import './App.css'

import Rotas from './rotas/Rotas'

import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Atividade</h1>

      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </>
  )
}

export default App

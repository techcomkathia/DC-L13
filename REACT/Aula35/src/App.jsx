import { useState } from 'react'
import './App.css'
import Rotas from './rotas/Rotas'
import BarraNavegacao from './componentes/BarraNavegacao'

import { BrowserRouter } from 'react-router-dom'
import { useContext } from 'react'
import { TemaContext } from './contextos/TemaContext'

function App() {

  const { tema } = useContext(TemaContext)

  return (
    <>
    <div style={tema}>
      <h1>Aula 35</h1>
     
      <BrowserRouter>
        <BarraNavegacao /> 
        <Rotas />
      </BrowserRouter>
    </div>
     
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Rotas from './rotas/Rotas'
import BarraNavegacao from './componentes/BarraNavegacao'

import { BrowserRouter } from 'react-router-dom'

function App() {
 

  return (
    <>
      <h1>Aula 35</h1>
     
      <BrowserRouter>
        <BarraNavegacao /> 
        <Rotas />
      </BrowserRouter>
    </>
  )
}

export default App

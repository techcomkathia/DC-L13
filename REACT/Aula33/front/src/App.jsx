import { useState, useEffect } from 'react'
import './App.css'
import ConsumoAPI from './componentes/ConsumoAPI';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Consumo de API com React</h1>
      <ConsumoAPI />
     
    </>
  )
}

export default App

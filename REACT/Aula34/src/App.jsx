import { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

//importação do componente de rotas
import Rotas from './rotas/Rotas'

import Template from './paginas/Template'

//import o browser router do react router dom
import { BrowserRouter } from 'react-router-dom' // permite o uso das rotas, é o componente que envolve toda a aplicação para que as rotas funcionem



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Template>
          <Rotas/>
        </Template>
      </BrowserRouter>
    </>
  )
}

export default App

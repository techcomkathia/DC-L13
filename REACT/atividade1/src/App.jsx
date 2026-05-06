import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Atividade1 from './componentes/Atividade1'
import Atividade2 from './componentes/Atividade2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Atividade1/>
      <Atividade2/>
      
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />

        </div>
      </section>
       
    </>
  )
}

export default App

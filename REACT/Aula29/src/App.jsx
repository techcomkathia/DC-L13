import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ImagemPato from './componentes/ImagemPato'
import { ImagemLogo } from './componentes/ImagemPato'
import ComponenteProps from './componentes/ComponenteProps'

function App() {

  return (
    <>
      <section id="center">
        <ImagemPato/>
        <ImagemPato/>
        <ImagemLogo/>

        <input type='text' name='texto' placeholder='exemplo de tag com atributos'/>

        <ComponenteProps nome='Joaquim' idade='30' cidade='Sao Paulo'/>

        <ComponenteProps nome='Maria' idade='25' cidade='Rio de Janeiro'/>

      </section>
    </>
  )
}

export default App

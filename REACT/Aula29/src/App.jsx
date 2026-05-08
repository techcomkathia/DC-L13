import { useState } from 'react'

import './App.css'
import ImagemPato from './componentes/ImagemPato'
import { ImagemLogo } from './componentes/ImagemPato'
import ComponenteProps from './componentes/ComponenteProps'

import Atividade1 from './componentes/Atividade1'
import Atividade2 from './componentes/Atividade2'

function App() {
  let contador = 0

  let [numero, setNumero] = useState(0)

  function adicionar1() {
    contador++
    console.log(contador)
  }
  return (
    <>

      <section id='exemplos' className='ocultar'>
        <ImagemPato/>
        <ImagemPato/>
        <ImagemLogo/>

        <input type='text' name='texto' placeholder='exemplo de tag com atributos'/>

        <ComponenteProps nome='Joaquim' idade='30' cidade='Sao Paulo'/>

        <ComponenteProps nome='Maria' idade='25' cidade='Rio de Janeiro'/>
      </section>
      <section className='ocultar'>       
        <Atividade1/>
      </section>

  
      <section className='ocultar'>
        <h1>{contador}</h1>
        <button onClick={()=>adicionar1()}>adicionar 1</button>
        <p>A variável contador tem o valor alterado mediante a execução da função, mas não tem seu estado alterado. Isso implica que não teremos uma nova renderização do componente na tela</p>

        <h1>{numero}</h1>
        <button onClick={()=>setNumero(numero+1)}>adicionar 1</button>
      </section>

      <section id='atividade2'>
        <Atividade2/>
      </section>


    </>
  )
}

export default App

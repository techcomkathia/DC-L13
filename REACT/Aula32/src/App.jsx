import './App.css'
import ComponenteExemplo from './componentes/ComponenteExemplo'
import { ComponenteComProps, ComponenteComPropsChildren } from './componentes/ComponenteExemplo'

//importação da folha de estilo do bootstrap (garante que as classes usadas pelo react-bootstrap sejam reconhecidas e façam a estilização correta)
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <h1>Aula 32 - Revisao 1 </h1>

      <ComponenteExemplo />
      <ComponenteExemplo />

      <ComponenteComProps titulo="Componente com props" conteudo="Conteudo do componente com props" cor='vermelho'/>
      <ComponenteComProps titulo="Componente com props 2" conteudo="Conteudo do componente com props 2"/>

      <ComponenteComPropsChildren>
          <h2>Exemplo de título passado com children para o componente</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum necessitatibus quae suscipit saepe unde cumque reprehenderit et quod sit aperiam!</p>
      </ComponenteComPropsChildren>

      <ComponenteComPropsChildren>
          <img src="https://placehold.co/600x400/CCCCCC/1F1F1F" alt="exemplo" />
          <p>Os beneficios de se ter um componente com children é que podemos utilizar para envelopar outros componentes ou tags de conteúdo já com uma estilização predefinida</p>
          <img src="https://placehold.co/600x400/blue/1F1F1F" alt="exemplo" />
      </ComponenteComPropsChildren>
    </>
  )
}

export default App

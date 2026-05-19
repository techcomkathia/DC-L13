/*1ª ATIVIDADE : crie um projeto com vite, instale o react-bootstrap e o bootstrap, faça a criação do componente CardProduto. Ele receberá as seguintes propriedades: imagem, titulo, preço e preçoComDesconto.
Comandos: npm create vite@latest (siga todas as etapas do console) - npm install react-bootstrap bootstrap
IMPORTANTE : importe a folha de css do bootstrap no arquivo App.jsx (import '../node_modules/bootstrap/dist/css/bootstrap.min.css')*/

import Card from 'react-bootstrap/Card';

export default function CardProduto(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imagem} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>
          {props.preco} - {props.precoComDesconto}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

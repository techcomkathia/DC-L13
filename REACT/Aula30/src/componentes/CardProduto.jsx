/*crie a aplicação em react com vite (comando: npm create vite@latest)
//Faça a instalação do react-bootstrap e do bootstrap na sua aplicação (Comando: npm install react-bootstrap bootstrap)

//importe a folha de css do bootstrap no arquivo App.jsx (import '../node_modules/bootstrap/dist/css/bootstrap.min.css')

//Crie um componente chamado CardProduto. Use o componente Card do react-bootstrap
//O componente CardProduto deve receber as seguintes propriedades: imagem, nome, preco e descricao
//Teste a renderizacao de um card de produto usando o componente CardProduto no app com as seguintes informacoes:
//{imagem: https://via.placeholder.com/150, nome: "Camisa de Linho", preco: 150.00, descricao: "Camisa feita de linho de alta qualidade"}
//conceitos explorados: propriedades, componentes, biblioteca react-bootstrap e bootstrap*/

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardProduto({ imagem, nome, preco, descricao }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {imagem} alt={nome} />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>
         {descricao}
        </Card.Text>
        <Card.Text>
          R$ {preco}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardProduto;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardProduto({imagem, nome, preco, descricao}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagem} alt={nome} />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>
            {descricao} - R$ {preco}
        </Card.Text>
        <Button variant="primary">Ver detalhes</Button>
      </Card.Body>
    </Card>
  );
}

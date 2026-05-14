import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardProduto({ imagem, nome, preco , descricao}){

    return(
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagem} />
            <Card.Body>
                <Card.Title>{nome}</Card.Title>
                <Card.Text>
                    {descricao}
                </Card.Text>
                <Card.Text>
                    R$ {preco}
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
        </>
    )

}
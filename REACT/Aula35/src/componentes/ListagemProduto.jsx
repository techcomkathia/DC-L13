import CardProduto from "./CardProduto";

export default function ListagemProduto({arrayProdutos, titulo}) {
  return (
    <div>
      <h2>{titulo}</h2>
       <div className="d-flex gap-3 flex-wrap justify-content-center">
        {arrayProdutos.map((produto) => (
        <CardProduto 
          key={produto.id}
          imagem={produto.imagem}
          nome={produto.nome}
          preco={produto.preco}
          descricao={produto.descricao}
        />
      ))}
       </div>
    </div>
  );
}
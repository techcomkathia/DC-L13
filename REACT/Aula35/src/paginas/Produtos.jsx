//a paágina produtos consome o contexto e renderiza as informações de todos os produtos
import ListagemProduto from "../componentes/ListagemProduto"
import { useContext } from "react"
import { ProdutosContext } from "../contextos/ProdutosContext"

export default function Produtos() {
  const {produtos} = useContext(ProdutosContext)
  return (
    <>
      <h1>Produtos</h1>
      <ListagemProduto arrayProdutos={produtos} titulo="Nossos produtos" />


    </>
  )
}
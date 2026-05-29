import { useContext } from "react"
import { TemaContext } from "../contextos/TemaContext"
import CadastroProduto from "../componentes/CadastroProduto"
import { ProdutosContext } from "../contextos/ProdutosContext"


export default function Home() {

  const {adicionarProduto} = useContext(ProdutosContext)

  return (
    <>
      <h1 >Home</h1>
      <CadastroProduto funcaoAdicionarProduto={adicionarProduto} />
    </>
  )
}
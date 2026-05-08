import { useState } from 'react'
import './App.css'

// importar todas as imagens usadas no cardápio
import burger01 from './imagensCompactadas/imagens/burger01.png'
import burger02 from './imagensCompactadas/imagens/burger02.png'
import burger03 from './imagensCompactadas/imagens/burger03.png'
import acomp01 from './imagensCompactadas/imagens/acomp01.png'
import bebida01 from './imagensCompactadas/imagens/bebida01.png'
import bebida02 from './imagensCompactadas/imagens/bebida02.png'

import SecaoProdutos from './componentes/SecaoProdutos'
import Cabecalho from './componentes/Cabecalho'
/* primeiro passo clonar o repositório para ter o arquivo de css e o diretorio com as imagens
//inicializar um projeto novo em react
//limpar o arquivo App.jsx e App.css
//O arquivo de styles.css deve ser copiado e colocado no conteúdo do App.css
//as imagens devem estar na pasta src*/

function App() {
  const [carrinho, setCarrinho] = useState([])

//o erro anterior era devido ao atributo de imagem no cardapio. Para corrigir o erro, troquei o atributo de img por imagem. 
  let cardapio = {
    burgueres: [
        {
            nome: "Clássico Angus Burger",
            preco: 22.50,
            descricao: "Delicie-se com o nosso Hambúrguer Clássico, feito com um suculento hambúrguer de carne angus, queijo derretido, alface crocante, tomate fresco e um toque especial do nosso molho secreto. Perfeito para saciar sua fome!",
            imagem: burger01
        },
        {
            nome: "Gourmet Burger",
            preco: 35.00,
            descricao: "O nosso Hambúrguer Gourmet, preparado com um suculento hambúrguer de carne nobre, queijo derretido, cebola caramelizada e bacon. Uma escolha irresistível!",
            imagem: burger02
        },
        {
            nome: "Defumado BBQ Burger",
            preco: 29.00,
            descricao: "Deixe-se envolver pelo sabor defumado do nosso Hambúrguer BBQ, uma deliciosa combinação de hambúrguer de carne suculenta, queijo cheddar derretido, cebola caramelizada e salada verde.",
            imagem: burger03
        },
        {
            nome: "Defumado BBQ Burger",
            preco: 29.00,
            descricao: "Deixe-se envolver pelo sabor defumado do nosso Hambúrguer BBQ, uma deliciosa combinação de hambúrguer de carne suculenta, queijo cheddar derretido, cebola caramelizada e salada verde.",
            imagem: burger03
        }
    ],

    acompanhamentos: [
        {
            nome: "Fritas",
            preco: 15.00,
            descricao: "Nossas batatas fritas são o acompanhamento perfeito para qualquer refeição! Cortadas em palitos e fritas até ficarem douradas e crocantes por fora, e macias por dentro, elas são irresistíveis em cada mordida.",
            imagem: acomp01
        }
    ],

    bebidas: [
        {
            nome: "Coca-Cola",
            preco: 5.00,
            descricao: "Refresque-se com a clássica Coca-Cola gelada, uma bebida que encanta paladares há décadas. Com seu sabor único e inconfundível para acompanhar seu hambúrguer ou batatas fritas.",
            imagem: bebida01
        },
        {
            nome: "Sprite",
            preco: 5.00,
            descricao: "Revitalize seus sentidos com a refrescante Sprite, uma bebida cítrica e efervescente que desperta os sentidos e eleva o seu ânimo para acompanhar seu hambúrguer ou batatas fritas.",
            imagem: bebida02
        }
    ]
  };

  return (
    <>
     <Cabecalho/>
     <div>
        <h1>Produtos no carrinho {carrinho.length}</h1>
     </div>
     <SecaoProdutos idSecao="burgueres" tituloSecao="Hambúrgueres" produtos={cardapio.burgueres} carrinho={carrinho} setCarrinho={setCarrinho}/>

     <SecaoProdutos idSecao="acompanhamentos" tituloSecao="Acompanhamentos" produtos={cardapio.acompanhamentos} carrinho={carrinho} setCarrinho={setCarrinho}/>

     <SecaoProdutos idSecao="bebidas" tituloSecao="Bebidas" produtos={cardapio.bebidas} carrinho={carrinho} setCarrinho={setCarrinho}/>
      
    </>
  )
}

export default App

import { createContext, useState } from "react";

export const ProdutosContext = createContext()

export function ProdutosProvider({children}) {

    const [produtos, setProdutos] = useState([
        { id: 1, nome: 'Produto 1', descricao: 'Descrição do Produto 1', preco: 10.99, imagem: 'https://placehold.co/600x400/C92071/FFFFFF' },
        { id: 2, nome: 'Produto 2', descricao: 'Descrição do Produto 2', preco: 19.99, imagem: 'https://placehold.co/600x400/FF5733/FFFFFF' },
        { id: 3, nome: 'Produto 3', descricao: 'Descrição do Produto 3', preco: 5.99, imagem: 'https://placehold.co/600x400/33FF57/FFFFFF' },
        { id: 4, nome: 'Produto 4', descricao: 'Descrição do Produto 4', preco: 15.99, imagem: 'https://placehold.co/600x400/3357FF/FFFFFF'
        }
      ]
    )
    function adicionarProduto(produto) {
        setProdutos([...produtos, produto])
    }

    function removerProduto(idProduto) {
        setProdutos(produtos.filter(produto => produto.id !== idProduto))
    }

    function atualizarProduto(idProduto, produtoAtualizado) {
        const produto = produtos.find(produto => produto.id === idProduto)

        if (produto) {
            const produtosAtualizados = produtos.map(produto => {
                if (produto.id === idProduto) {
                    return { ...produto, ...produtoAtualizado }
                    //os atributos do produto atualizado vão sobrescrever os atributos do produto original, mantendo os atributos que não foram atualizados
                }
                return produto
            })
        }
        else{
            console.log('Produto não encontrado')
        }
    }

    return (
        <ProdutosContext.Provider value={{ produtos, adicionarProduto, removerProduto, atualizarProduto }}>
            {children}
        </ProdutosContext.Provider>

    )
}
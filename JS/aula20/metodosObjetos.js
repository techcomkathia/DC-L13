let produto = {
    nome: "Notebook",
    preco: 2500,
    estoqueDisponivel: true,
    detalhar: function() {
        console.log(`Produto: ${this.nome}`);
        console.log('Produto: ' + produto.nome);
        console.log(`Preço: R$ ${produto.preco}`);
        console.log(`Estoque disponível: ${produto.estoqueDisponivel ? 'Sim' : 'Não'}`);
    }
}

//caracteristica: atributo
//função/ comportamento: metodo

//chave: valor
// chave: atributo ou método

produto.detalhar()


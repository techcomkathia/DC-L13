//OBJETIVO: definição de classes e instâncias de objetos

class Livro {
    constructor(titulo, ano_publicacao, autor, status = "disponível") {
        this.titulo = titulo;
        this.ano_publicacao = ano_publicacao;
        this.autor = autor;
        this.status = status;
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        //verficar se o livro tem os dados necessários
        //o livro deve ser da classe Livro 
        if(( livro instanceof Livro) == false){ 
            //o instanceof verifica se o livro pertence a classe Livro, que é diferente de um objeto que tenha os atributos da classe Livro mas não seja da classe Livro
            throw new Error("O livro deve ser da classe Livro");
        }
        this.livros.push(livro);
    }

    listarLivros() {
        if(this.livros.length == 0) {
            return "Nenhum livro cadastrado";
        }
        return this.livros;
    }

}

const livro1 = new Livro("O Senhor dos Aneis", 1954, "JRR Tolkien");
const livroObjeto = {
    titulo: "O Senhor dos Aneis",
    ano_publicacao: 1954,
    autor: "JRR Tolkien",
    status: "emprestado"
}
const livro2 = new Livro("O Hobbit", 1937, "JRR Tolkien", "emprestado");
const biblioteca = new Biblioteca();
//biblioteca.adicionarLivro(livroObjeto);
biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
console.log(biblioteca.listarLivros());
console.log(livro1.titulo);
console.log(biblioteca.livros[0].titulo)
livro1.titulo = "teste atualização por atributo"
console.log(biblioteca.livros[0].titulo)
console.log(livro1.titulo)

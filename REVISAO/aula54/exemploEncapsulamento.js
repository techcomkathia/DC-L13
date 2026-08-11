class Pessoa {
    // Campos privados
    #nome;
    #idade;
  
    constructor(nome, idade, cidade) {
      this.#nome = nome;
      this.#idade = idade;
      this.cidade = cidade;
    }
  
    // Métodos públicos
    falar() {
      console.log(`Meu nome é ${this.#nome} e tenho ${this.#idade} anos`);
    }
  
    // Métodos para acessar campos privados
    getNome() {
      return this.#nome;
    }
  
    setNome(nome) {
      this.#nome = nome;
    }
  
    getIdade() {
      return this.#idade;
    }
  
    setIdade(idade) {
      this.#idade = idade;
    }
  }
  
  const pessoa = new Pessoa('Cleitinho', 13, 'Recife');
  console.log(pessoa.cidade); // Recife
  console.log(pessoa.nome); // undefinid (pois o atribuito é privado)
  console.log(pessoa.getNome()) // Cleitinho
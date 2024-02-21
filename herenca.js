// classe mãe o super class(modelo)

class Animal {
    // variaveis privadas 
    #especie 
    #nome 
    #barulho

    //construtorda classe
    
    constructor(especie, nome, barulho){
        this.#especie = especie
        this.#nome = nome
        this.#barulho = barulho
    }

    //funções getter ara leitura de variavel

    get especie (){
        return this.#especie
    }

    get nome (){
        return this.#nome 
    }

    get barulho (){
        return this.#barulho
    }


    // stter para alterar as variaveis privadas

    set especie(especie){

        if(especie === '')
            //lança uma execeção
            throw new Error('Valor do parâmetro invalido')
         else
        this.#especie = especie
    }

    set nome(nome){

        if(nome === '')
            //lança uma execeção
            throw new Error('Valor do parâmetro invalido')
         else
        this.#nome = nome
    }

    set barulho(barulho){

        if(barulho === '')
            //lança uma execeção
            throw new Error('Valor do parâmetro invalido')
         else
        this.#barulho = barulho
    }

    // funções normais 

    fazerBarulho(){
        console.log(`${this.nome} ${this.barulho}`)
    }
    
    // esse metodo é privado so pode ser acessado pela propria 
    #montarJSON(){
        return{
            especie: this.#especie,
            nome: this.#nome,
            barulho: this.#barulho
        }
    }

    mostrarJSON(){
        console.log('\nDados em formato JSON: ', this.#montarJSON())
    }

}

/// classe filho ou subclass estende  a mãe e herda todos os métodos e variavéis não privados 

export class Cao extends Animal {

    // construtor da classe Cao
    constructor(nome, som){
        
        super('Mamifero',nome,som)

    }

        // chama construtor da mãe

}

// classe gaot 
export class Gato extends Animal {

    // construtor da classe Cao
    constructor(nome, som){
        
        super('Felino',nome,som)

    }

        // chama construtor da mãe

}




// testes  =========
/// cria objetos 

const scooby = new Cao('TOTO','AU AU AU AU')
const tom = new Gato('Tomcat', 'Miau')

// usa o setter para trocar o nome
scooby.nome = 'Scooby'

// chama os métodos

scooby.fazerBarulho()
tom.fazerBarulho()
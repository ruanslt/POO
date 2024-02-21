class Figura {

    // # = variaveis sao privadas 
    #largura  
    #altura 


    // construtopr da classe

    constructor(largura, altura) {
        this.#largura = largura
        this.#altura = altura
    }


    //variavel estatica = compartilahda da classe 
    static nomeClasse = "ClasseFigura"

    // método ou função 
    calculaArea() {
        return this.#largura * this.#altura
    }

    // método ou função getter 
    get area() {

        return this.calculaArea()

    }

    // método ou função setter 

    set largura(largura){
        this.#largura = largura
    }

    set altura(altura){
        this.#altura = altura
    }

  

}


const quadrado = new Figura(50, 50)
quadrado.largura = 70
quadrado.altura = 70
console.log(`Quadrado: largura = ${quadrado.largura} x altura = ${quadrado.altura}`)

const retangulo = new Figura(100, 50)
console.log(`Retangulo: largura = ${retangulo.largura} x altura = ${retangulo.altura}`)


console.log(Figura.nomeClasse)

console.log(`Area do quadrado: ${quadrado.calculaArea()}`)
console.log(`Area do retangulo: ${retangulo.calculaArea()}`)

/// usando getter sem parenteses
console.log(`Area do quadrado: ${quadrado.area}`)
console.log(`Area do retangulo: ${retangulo.area}`)

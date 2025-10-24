class Forma {
    calcularÁrea(){
        return 0;
    }

descrever(){
    return `Área : ${this.calcularÁrea()}`
    
    }

}

class Retangulo extends Forma {
    constructor(Largura,altura){
        super();
        this.Largura = Largura;
        this.alturatura = altura;
    }

    calcularÁrea() {
        return this.Largura *this.altura;
    }
}

class Circulo extends Forma {
    constructor(raio){
        super();
        this.raio = raio;
    }


}

 class Triangulo extends Forma{
    constructor(base, altura){
        super();
        this.base = base;
        this.altura = altura;
    }
 
}

//Modos de uso para Polimorfismo
const formas = [
    new Retangulo(5,10),
    new Circulo(7),
    new Triangulo(6,8)
];

formas.forEach(forma => {
    console.log(`${forma.constructor.name} : ${forma.descrever()}`);

});
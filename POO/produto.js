//Definindo uma classe
class produto {
    constructor(nome,preco) {
        this.nome=nome;
        this.preco=preco;
    }
    desconto(percentual) {
        return this.preco *(1 - percentual / 100);
    }
}

const productor1 = new produto("camiseta",39.90);
const productor2 = new produto("calça", 100.00);

console.log(productor1.nome);
console.log(productor1.desconto(20));

console.log(productor2.nome);
console.log(productor2.desconto(20));

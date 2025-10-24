//Classe pai (SUPERCLASSE)
    class Animal {
        constructor(nome, idade){
            this.nome = nome;
            this.idade = idade;
        }

//metodo para fazer som
fazersom() {
    console.log(`${this.nome}faz um Som.`);

}

//metodo para mostrar informaçãoes
mostrarinfo() {
    console.log(`Nome: ${this.nome},idade: ${this.idade}`);
}
    }
//criar a classe filha
    class Macaco extends Animal{
    fazerSom(){
        console.log(`${this.nome} Faz : hu hu hu hu`);
    }
}
    
const animal1 = new Animal("primata",6);
const chipanze = new Animal("cezar",7);

animal1.fazersom();
chipanze.fazsom();
chipanze.mostrarinfo();
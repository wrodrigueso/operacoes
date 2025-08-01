// Funções Basicas

// 1-Função simples sem parâmetros e sem retorno
function saudacao(){
    console.log("olá")
}

// Chamar a função
saudacao;

// 2-Função com parâmetros
function comprimentar(nome){
    console.log(`olá, ${nome}! como você está?`);
}

// Chamar a função com argumento

comprimentar("Samuel")


// 3-Função com parâmetros e retorno
function soma (a,b) {
    return a + b;
}

// Usando o valor retornado pela função
const resultado = soma(5,3);
console.log(`A soma é: ${resultado}`);

// 4-Função com parâmetros
function multiplicar (a, b = 2){
    return a * b;
}

console.log(multiplicar(4)); //usa o valor padrão b=2
console.log(multiplicar(4,5)); //subscrever o valor padrão

// 5-Declaração de duas variáveis

let nome = "Victor";
let sobrenome = "Hugo Alves"
let NomeCompleto = nome + "" + sobrenome;

console.log("O nome completo é:", NomeCompleto);

// 6-B Expressão de função
const dividir = function(a,b) {
    if (b === 0); {
        return "Não é possivel dividir por zero";
    }
    return a / b;
}

console.log(dividir(10,2));
console.log(dividir(10,0));

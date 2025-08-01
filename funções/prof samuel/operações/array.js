// 1-Lista de frutas

const frutas = ["maça", "banana", "uva", "morango", "manga"];
console.log("Primeira fruta", frutas[0]);
console.log("Ùltima fruta", frutas[frutas.length -1]);
console.log("Total de frutas", frutas.length);

// A função length retorna os números de elementos do array

// 2-Encontrando elementos

const alunos = [
    {nome: "victor", nota: 7.5},
    {nome: "luis", nota: 9.0},
    {nome: "wilian", nota: 6.5},
    {nome: "samuel", nota: 8.0},
    {nome: "loran", nota: 10},
];

const alunoNotaAlta = alunos.find(aluno => aluno.nota > 8)
console.log("Primeiro aluno com nota > 8:",alunoNotaAlta);

const TemNota10 = alunos.some(aluno => aluno.nota === 10);
console.log("Existe aluno com nota 10?", TemNota10);
// Váriavel booleana, onde

// 3-Manipulando arrays

const numeros = [];
numeros.push(10,20,30); // adicionar números ao final do array
numeros.unshift(5); // adicionar o número 5 no início
console.log("Array após adições:", numeros); // [5,10,20,30]
numeros.pop(); //remover o último elemento
numeros.shift(); //remover o primeiro elemento
console.log("Array final:", numeros); // [10, 20]

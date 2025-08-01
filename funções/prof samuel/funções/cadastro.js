const prompt = require(`prompt-sync`)();

let nome = prompt(`Digite seu nome: `);
let idade = parseInt(prompt(`digite sua idade:`));
let salario =parseFloat(prompt(` salario:`));

console.log(`nome:${nome}`);
console.log(`idade${idade}`);
console.log(`Salario${salario.toFixed(2)}`);

//para confirmar
let continuar = prompt( `deseja continuar o cadastro? (s/n)`);
 if(continuar.toLowerCase() === `n`) {
console.log(`Cadastro realizado com sucesso.`)
 }else (continuar.toLowerCase( )=== `s`); {
    console.log (`Vamos continuar . . .`)
 }
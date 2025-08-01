// 1. forma loop - contando do 1 a 10
// console.log("Exemplo basico for loop");
// for(letI=1; i <=10, i++)  {
    //console.log('numero: ${i}');
//}

// 2. white loop - calculando fatorial
// console.log("exemplo fatorial");
// let numero = 5;
// let fatorial = 1;
// let contador = 1;

// white (contador <= numero){
//     fatorial *= contador;
//     console.log(`${contador}! = ${fatorial}`);
//     contador++;
// }
//3. for. . .or loop
console.log("Exemplo com array");
const fruta = [' maça', 'uva','manga', 'ameixa', 'pessego'];
const preço = [2.50, 1.80, 3.00, 4.50, 2.20];

for (const fruta of fruta) {
    console.log (`Fruta: ${fruta}`);
}

console.log("frutas com preço:");
frutas.forEach((fruta, index) =>{
        console.log(`${fruta}: R$ ${preço[index]. toFixed}`)
})
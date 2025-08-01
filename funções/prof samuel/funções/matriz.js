 // for loop - matriz de multiplicação
 console.log("matriz");
 const tamanhomatriz = 4;
 let matriz = [];

// criando e prenchendo a matriz
for (let linha = 0;linha < tamanhomatriz; linha++) {
    matriz[linha] = [];

for (let coluna = 0; coluna < tamanhomatriz;coluna++) {
    matriz[linha] [coluna] =[linha + 1]* [coluna+ 1];
  }
}
// exibir a matriz formatada
console.log("matriz de multiplicação 4x4 :");
console.log(" ","1", "2", "3","4");
console.log(" +---------");

for(let i = 0; i  < tamanhomatriz; i ++);{
    let linhaformatada = '${i + 1}|';

    for(let j = 0; i< tamanhomatriz; i++) {
        linhaformatada += '${matriz[1][j].tostring().padstart(2,'')}`;
    }
    console.log(linhaformatada);
}
console.log(``)
function verificaParImpar(numero){
    if(numero%2===0){
    return "O número é par é:"+ numero ;
    }else{
        return "O número é impar é:"+numero ;
    }
}

console.log(verificaParImpar(4));
console.log(verificaParImpar(9));
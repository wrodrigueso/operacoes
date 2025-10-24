 class ContaBancaria {
    #saldo; //propriedade privada

constructor(sldoInicial) {
    this.#saldo =saldoInicial;
}

depositar(valor){
    if(valor > 0){
        this.#saldo += valor;
        console.log(`deposito de R$ ${valor} realizado!`);
    } else{
    console.log("valor invalido!")
    }
}
sacar(valor) {
     if (valor >0 && valor <= this.#saldo) {
         this.#saldo += valor;
        console.log(`Saque de R$ ${valor} realizado com sucesso!`);
     }else {
        console.log("Saldo insuficiente ou valor invalido!")
        }
    }
consultarSaldo(){
        return this.#saldo;
}

}
//testando
const minhaconta = new ContaBancaria(1000)
minhaconta.depoisitar(0);
minhaconta.sacar(-150);
console.log(`Saldo atual: ${minhaconta.consultarSaldo()}`);
class carrinhoCompras {
    #itens;
    #limiteItens;
    #valormaximo;

    constructor(limiteItens = 10,valormaximo= 5000){
        this.#itens = [];
        this.#limiteItens = limiteItens;
        this.#valormaximo = valormaximo;
    }

    #calcularTotal(){
        return this.#itens.reduce((total,item) => total + item.preço,0);
    }
    #validarAdicao(preco) {
        if (this.#itens.length >= this.#limiteItens){
            console.log(`limite de ${this.#limiteItens} itens atingindo;`);
            return false;
        }
    
    if (this.#calcularTotal() + preco > this.#valormaximo) {
        console.log(`valor maximo de R$ ${this.#valormaximo} foi ultrapassado!`);
        return false;
    }
    return true;

}

adicionarItem(nome,preco,quantidade = 1) {
        if(preco <= 0 || quantidade <= 0) {
            console.log("preço e quanidade devem ser positivos!");
            return false;
    }

    const precoTotal = preco * quantidade;

        if(this.#validarAdicao(precoTotal)) {
            this.#itens.push( {nome,preco: precoTotal,quantidade});
            console.log(`${quantidade} x ${nome} adicionado(s) ao carinho!`)
            return true;
        }

        return false;
}
    removerItem(nome) {
        const indice = this.#itens.findIndex(item => item.nome === nome);

         if (indice !== -1) {
            const itemRemovido = this.#itens.splice(indice, 1) [0];
            console.log(`${itemRemovido.nome} removido do carrinho.`);
            return true;
        }else{
            consdole.log("item não encontrado!");
            return false;
        }
    }
aplicarCupomDesconto(codigo) {
    const cuponsValidos = { "DESC10" : 0.1, "DESC20" :0.2};

    if (cuponsValidos[codigo]) {
        const desconto = this.#calcularTotal() * cuponsValidos[codigo];
        console.log(`Cupom ${codigo} aplicado! Desconto :R$ ${desconto.toFixed(2)}`);
        return desconto;
    }else{
        console.log("Cupom invalido!")
        return 0;
    }
}
exibirResumo(){
    console.log("\n ---- RESUMO DE CARRINHO ---");
    this.#itens.forEach(item => {
        console.log(`${item.quantidade} x ${item.nome} -R$ ${item.preco.toFixed(2)}`);
        console.log(`total: R$ ${this.#calcularTotal().toFixed(2)}`);
        console.log(`Itens : ${this.#itens.length} / ${this.#limiteItens}`)});
    }

detQuantidadesItens() {
    return this.#itens. length;
}
getTotal(){
    return this.#calcularTotal();

}

}
//casos de uso
const carrinho =new carrinhoCompras(5, 300);
carrinho.adicionarItem("Notebook", 2000, 1);
carrinho.adicionarItem("Mouse" , 150,1);
carrinho.adicionarItem("Bolsa para notebook" , 300, 1 );
carrinho.exibirResumo();
carrinho.aplicarCupomDesconto("DESC10");
carrinho.removerItem("Mouse");
carrinho.exibirResumo();
console.log("-----cadastro cliente banco 2024-----")

//-Criando um objeto cliente

let cliente = {
    nome: "Wilian Pinange",
    idade: 16,
    conta: "1512-6",
    agencia: "0312",
    saldo: "2.500,00",
    tipo_conta: "corrente",
    abertura_conta: "02/01/2023",
    status: "ativa"
};

//-Exibindo o objeto inicial

console.log("Dados cadastrais inicias");
console.log(cliente);

//-Modificando propriedades

cliente.nome = "Wilian Renan Pinange",
cliente.idade = 17,
cliente.saldo = "5.000,00"

//-Exibindo o objeto após as modificações
console.log("Dados cadastrais após a atualização:");
console.log(cliente);
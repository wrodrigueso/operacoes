// Calcular o IMC (índice de massa corporal)

function CalcularIMC (peso, altura, MostrarCategoria = true) {
const imc = peso / (altura * altura);
    if (!MostrarCategoria) {
        return imc.toFixed(2);
    }

// Determinar a categoria do IMC

let categoria;
    if (imc < 18.5) {
        categoria = "Abaixo do peso";
    } else if (imc < 25) {
        categoria = "Peso normal";
    } else if (imc < 30) {
        categoria = "sobrepeso";
    } else if (imc < 35) {
        categoria = "obesidade grau I";
    } else if (imc < 40) {
        categoria = "obesidade grau II";
    } else {
        categoria = "obesidade grau III";
    }

    return {
        imc:imc.toFixed(2),
        categoria: categoria
    };
}
    console.log(CalcularIMC(60, 1.70));
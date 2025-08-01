const dados= {
    '2024':{
        premium: 261,
        adSupported: 424,
        total: 675
    },
    '2023': {
        total: 489
    }
};

const crescimentoAnual = ((675 - 489) / 489) * 100;
console.log(`Crescimento anual total: ${crescimentoAnual.toFixed(2)}%`);

const proporcaoPremium = (261 / 675) * 100;
const proporcaoGratuitos = (424 / 675) * 100;
console.log(`Proporção Premium: ${proporcaoPremium.toFixed(2)}%`);
console.log(`Proporção Gratuitos: ${proporcaoGratuitos.toFixed(2)}%`);

const populacaoGlobal = 8000;
const potenciaMercado = (675 / populacaoGlobal) * 100;
console.log(`Potência de mercado global: ${potenciaMercado.toFixed(2)}%`);


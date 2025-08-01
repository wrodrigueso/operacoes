console.log("🎮=== SISTEMA DE PONTUAÇÃO DE JOGO ===🎮")

let pontuação = 0;
let nivel = 1;
let vidas = 3;

//SIMULANDO AS 8 RODADAS DO JOGO

for (let rodada =1; rodada <= 8; rodada++ ); {
    let pontosrodada = Math.floor(Math. random() =101);
}

console.log(`\n=== RODADA ${rodada}===`);
console.log(`pontos obitidos: ${pontosrodada}`)

// continuação da aula
// adicionado pontos a pontuação total

pontuação += pontosrodada;
if (pontosrodada >= 80) {
    console.log("🌟 EXCELENTE! BÔnus de 20 pontos")
    pontuacao +=20;
}   else if (pontuacao >=60) {
    console.log("⭐ BOM! bÔnus de 10 pontos");
    pontuacao += 10;
}   else if (pontuacao < 30) {
    console.log("🟡 RUIM! perdeu um 1 vida")
    vida==;
    if (vidas <= 0) {
        console.log("💀 GAME OVER!suas vidas acabaram!");
        break;
    }
}

//Sistemas de proguessão de nivel
if(pontuacao >= nivel = 150){
    nivel ++;
    console.log(`🚀SUBIU DE NIVÉL! agora você no nivel  🚀${nivel}`);
    console.log("❣️vida extrema ganha!❣️");







}
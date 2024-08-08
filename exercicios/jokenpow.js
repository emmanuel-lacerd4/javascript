/**
 * 
 * @author Emmanuel L. Nogueira
 */

console.clear();

// Importar o pacote readline-sync (input no console)
const input = require('readline-sync');

console.log("    __ _____ _____ ____ _____ _____ _____ _ _ _");
console.log(" __|  |     |  |  |  __|   | |  _  |     | | | | ");
console.log("|  |  |  |  |    -|  __| | | |   __|  |  | | | |");
console.log("|_____|_____|__|__| ___|_|___|__|  |_____|_____|");
console.log("");
// Variáveis
let jogador, computador, papel, pedra, tesoura;

// Entrada

console.log("0. Papel");
console.log("1. Pedra");
console.log("2. Tesoura");
jogador = Number(input.question("Digite a opcao desejada: "))

switch (jogador) {
    case 0:
        console.log("Jogador escolheu PAPEL!"); // 0 < 1 = jogador ganhou, 
        break
    case 1:
        console.log("Jogador escolheu PEDRA!");  // 1 === 1 
        break
    case 2:
        console.log("Jogador escolheu TESOURA!");
        break
    default:
        console.log("Opção invalida");
}

computador = Math.floor(Math.random() * 2)

switch (computador) {
    case 0:
        console.log("Computador escolheu PAPEL!");
        break
    case 1:
        console.log("Computador escolheu PEDRA!");
        break
    case 2:
        console.log("Computador escolheu TESOURA!");
        break
}

if (jogador != computador) {
    console.log("Jogador ganhou");
    0 < 1, 0 > 2;
    1 > 0, 1 > 2;
    2 > 0, 0 > 2;
} else if (jogador === computador) {
    console.log("EMPATE!");
} else {
    console.log("Jogador PERDEU!");
}

    //console.log("Jogador PERDEU :(");

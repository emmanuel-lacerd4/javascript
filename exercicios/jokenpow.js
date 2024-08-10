/**
 * 
 * @author Emmanuel L. Nogueira
 */

console.clear();

// Importar o pacote readline-sync (input no console)
const input = require('readline-sync');

// Variáveis
let jogador, computador;

console.log("    __ _____ _____ ____ _____ _____ _____ _ _ _");
console.log(" __|  |     |  |  |  __|   | |  _  |     | | | | ");
console.log("|  |  |  |  |    -|  __| | | |   __|  |  | | | |");
console.log("|_____|_____|__|__| ___|_|___|__|  |_____|_____|");
console.log("");
console.log("1. Papel");
console.log("2. Pedra");
console.log("3. Tesoura");
jogador = Number(input.question("Digite a opcao desejada: "));
console.log("________________________________");



// Lógica do jogador
switch (jogador) {
    case 1:
        console.log("Jogador escolheu PEDRA!");
        break
    case 2:
        console.log("Jogador escolheu PAPEL!");
        break
    case 3:
        console.log("Jogador escolheu TESOURA!");
        break
    default:
        console.log("Opção invalida");
}

// Lógica do computador
computador = Math.floor(Math.random() * 3 + 1)

switch (computador) {
    case 1:
        console.log("Computador escolheu PEDRA!");
        break
    case 2:
        console.log("Computador escolheu PAPEL!");
        break
    case 3:
        console.log("Computador escolheu TESOURA!");
        break
}

// Lógica para determinar empate ou declarar o vencedor
if (jogador === computador) {
    console.log("EMPATE!");
} else if ((jogador === 1 && computador === 3) || (jogador === 2 && computador === 1 || (jogador === 3 && computador === 2))) {
    console.log("Jogador VENCEU!")
} else {
    console.log("Computador VENCEU!")
}
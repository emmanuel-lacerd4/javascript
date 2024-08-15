/**
 * Jogo do dado
 * @author Emmanuel L. Nogueira
 */

console.clear(); // Limpar a tela.

// Importar o pacote readline-sync (input no console)
const input = require('readline-sync');

// Variáveis
let face;

console.log("Jogo do dado");
input.question("Pressione a tecla [Enter] para jogar o dado: ");
// Sorteio da face de um dado
// Math (classe matemática)
// .floor (conversão para números inteiros)
// .random * 6 (gerador de números aleatórios 0, 1, 2, 3, 4 e 5)
face = Math.floor(Math.random() * 6);

switch (face) {
    case 0:
        console.log("⚀");
        break
    case 1:
        console.log("⚁");
        break
    case 2:
        console.log("⚂");
        break
    case 3:
        console.log("⚃");
        break
    case 4:
        console.log("⚄");
        break
    case 5:
        console.log("⚅");
        break
}

/**
 * Sorteio de um número de 1 a 16
 * @author Emmanuel L. Nogueira
 */

console.clear(); // Limpar a tela.

// Importar o pacote readline-sync (input no console)
const input = require('readline-sync');

// Variáveis
let sorteio;

input.question("Pressione a tecla [Enter] para sortear um numero");

sorteio = Math.floor(Math.random() * 16 + 1);
console.log(sorteio);
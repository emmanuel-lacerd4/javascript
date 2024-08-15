/**
 * APP Flex
 * @author Emmanuel L. Nogueira
 */

console.clear(); // Limpar a tela.

// Importar o pacote colors
const colors = require('colors');

// Importar o pacote readline-sync (input no console)
const input = require('readline-sync');

// Variáveis
let etanol, gasolina;

console.log("Etanol ou Gasolina?");

// Entrada
etanol = Number(input.question("Digite o valor do etanol: "));
gasolina = Number(input.question("Digite o valor da gasolina: "));

// Processamento/Saída
if (etanol < 0.7 * gasolina) {
    console.log("Abastecer com Etanol!".green);
} else {
    console.log("Abastecer com Gasolina!".yellow);
}
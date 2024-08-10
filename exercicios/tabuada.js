/**
 * Tabuada
 * @author Emmanuel L. Nogueira
 */

console.clear();

// Importar o pacote readline-sync (input no console)
const input = require('readline-sync');

// Variáveis
let valor;

console.log("Tabuada");
valor = Number(input.question("Digite o valor da tabuada: "));
console.log("");

for (let i = 1; i < 11; i++) {
    console.log(`${valor} x ${i} = ${valor * i}`);
}
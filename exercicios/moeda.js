/**
 * Converter real para euro
 * @author Emmanuel L. Nogueira
 */

console.clear();

// Importar o pacote readline-sync (input no console)
const input = require('readline-sync');

console.log("Converta real para euro");
let real, euro, valor;

real = Number(input.question('Digite a quantidade de reais a serem convertidos: '));
euro = Number(input.question("Digite o valor atual do Euro: "));
valor = real / euro;

console.log(`${valor.toFixed(2)} Euros`);
/**
 * Desconto da loja
 * @author Emmanuel L. Nogueira
 */

console.clear();

// Importar o pacote readline-sync (input no console)
const input = require('readline-sync');

console.log("Cálculo de combustível");

let gasolina, kilometragem, preco, valor, media, final;

preco = Number(input.question('Insira o valor da gasolina: '));
kilometragem = Number(input.question('Insira a distancia ate o local desejado: '));
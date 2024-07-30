/**
 * APP Flex
 * @author Emmanuel L. Nogueira
 */

//Importação de pacotes
const colors = require('colors');
const input = require('readline-sync');

//Variáveis
let etanol, gasolina;

console.clear();
console.log("Etanol ou Gasolina?");

//Entrada
etanol = Number(input.question("Digite o valor do etanol: "));
gasolina = Number(input.question("Digite o valor da gasolina: "));

//Processamento/Saida
if (etanol < 0.7 * gasolina) {
    console.log("Abastecer com Etanol!".green);
} else {
    console.log("Abastecer com Gasolina!".yellow);
}
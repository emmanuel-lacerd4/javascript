/**
 * Estudo da estrutura de controle if-else
 * @author Emmanuel L. Nogueira
 */

// Importar o pacote readline-sync (input no console)
const input = require('readline-sync');

let idade;

console.clear();
console.log("Estudo da estrutura if-else");
console.log("Validar maioridade");
idade = Number(input.question("Digite a sua idade: "));
//Uso da estrutura if-else para validar a idade
if (idade < 18) {
    console.log("Menor de idade.");
} else {
    console.log("Maior de idade.");
}
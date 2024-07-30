/**
 * Cálculo de média de 2 notas
 * @author Emmanuel L. Nogueira
 */

//Importar o pacote readline-sync (input no console)
const colors = require('colors');
const input = require('readline-sync');

//Variáveis
let nota1, nota2, media;

console.clear();
console.log("Cálculo da média");
//Captura da nota pelo pacote readline-sync
//Entrada
nota1 = Number(input.question("Digite a nota 1: "));
nota2 = Number(input.question("Digite a nota 2: "));
//Processamento
media = (nota1 + nota2) / 2;
//Saída
console.log(`Média: ${media.toFixed(2)}`);
if (media < 5) {
    console.log("REPROVADO!".red);
} else {
    console.log("APROVADO!".blue);
}
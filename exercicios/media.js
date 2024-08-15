/**
 * Cálculo de média de 2 notas
 * @author Emmanuel L. Nogueira
 */

console.clear(); // Limpar a tela.

// Importar o pacote colors
const colors = require('colors');

// Importar o pacote readline-sync (input no console)
const input = require('readline-sync');

// Variáveis
let nota1, nota2, media;

console.log("Cálculo da média");
// Captura da nota pelo pacote readline-sync
// Entrada
nota1 = Number(input.question("Digite a nota 1: "));
nota2 = Number(input.question("Digite a nota 2: "));
// Processamento
media = (nota1 + nota2) / 2;
// Saída
console.log(`Média: ${media.toFixed(2)}`);
// Exemplo de uso da estrutura if - else if
if (media < 2) {
    console.log("REPROVADO".red);
} else if (media >= 2 && media < 5) {
    console.log("RECUPERAÇÃO".yellow);
} else {
    console.log("APROVADO".blue);
}
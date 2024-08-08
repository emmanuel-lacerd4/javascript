/**
 * Exemplo de uso da estrutura else if
 * @author Emmanuel L. Nogueira
 */

console.clear();

// Importar o pacote readline-sync (input no console)
const input = require('readline-sync');

// Variáveis
let idade;

// Entrada
idade = Number(input.question("Digite a sua idade: "));

//Processamento/Saída
if (idade < 16) {
   console.log("Proibido votar");
} else if (idade === 16 || idade === 17 || idade > 70) {
   console.log("Voto facultativo");
} else {
   console.log("Voto obrigatório");
}
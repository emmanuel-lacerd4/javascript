/**
 * Cálculo da quantidade de tijolos baianos 8 furos por 
 * metro quadrado, sabendo que 1m2 = 28 tijolos
 * @author Emmanuel L. Nogueira
 */

console.clear(); // Limpar a tela.

// Importar o pacote readline-sync (input no console)
const input = require('readline-sync');

let m2, tijolos;

console.log("Cálculo da quantidade de tijolos por metro quadrado (tijolo baiano 8 furos");

// Entrada
m2 = Number(input.question("Quantos metros quadrados voce precisa? "));

// Processamento
tijolos = m2 * 28;

// Saída
console.log(`Você precisará de ${tijolos} tijolos`);
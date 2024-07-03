/**
 * Regra de 3
 * @author Emmanuel L. Nogueira
 */

const input = require('readline-sync');

console.clear();
console.log("Calculo do valor da porcentagem:");
console.log("X% de Y = valor");

//Variaveis
let x, y, valor;
//Entrada
x = Number(input.question('Digite o valor de x: '));
//Console.log(x);
y = Number(input.question('Digite o valor de y: '));
//Processamento
valor = (x * y) / 100;
//Saída
//console.log(valor);
console.log(`${x}% de ${y} = ${valor.toFixed(2)}`);
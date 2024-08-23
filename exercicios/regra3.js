/**
 * Regra de 3
 * @author Emmanuel L. Nogueira
 */

console.clear() // Limpar a tela.

// Importar o pacote readline-sync (input no console)
const input = require('readline-sync')

console.log("Calculo do valor da porcentagem:")
console.log("X% de Y = valor")

// Variáveis
let x, y, valor

// Entrada
x = Number(input.question('Digite o valor de x: '))
//console.log(x)
y = Number(input.question('Digite o valor de y: '))

// Processamento
valor = (x * y) / 100

// Saída
//console.log(valor);
console.log(`${x}% de ${y} = ${valor.toFixed(2)}`)
/**
 * Desconto da loja
 * @author Emmanuel L. Nogueira
 */

console.clear() // Limpar a tela.

// Importar o pacote readline-sync (input no console)
const input = require('readline-sync')

console.log("Cálculo do valor de desconto")
console.log("X% de Y = Valor de desconto")

let total, desconto, totalDesconto, valor

// Entrada
total = Number(input.question('Digite o valor do Produto: '))
desconto = Number(input.question('Digite o valor do desconto em porcentagem: '))
console.log("___________________________")

// Processamento
valor = (total * desconto) / 100
console.log(`desconto de R$ ${valor}`)

// Saída
totalDesconto = total - valor
console.log(`${total} reais o valor total com ${desconto}% de desconto fica no valor final de: ${totalDesconto.toFixed(2)}`)
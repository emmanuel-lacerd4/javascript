/**
 * Tabuada com While
 * @author Emmanuel L. Nogueira
 */

console.clear() // Limpar a tela.

// Importar o pacote readline-sync (input no console)
const input = require('readline-sync')

// Variáveis
let valor
let i = 1

// Entrada
console.log("Tabuada com While")
console.log("")
valor = Number(input.question("Digite o numero da tabuada: "))

// Processamento/Saída
while (i < 11) {
    console.log(`${valor} x ${i} = ${valor * i}`)
    i++
}
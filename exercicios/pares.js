/**
 * Indicar quantidade de números pares dentro de um laço for
 * @author Emmanuel L. Nogueira
 */

console.clear() // Limpar a tela.

// Importar o pacote readline-sync (input no console)
const input = require('readline-sync')

let pares = 0

for (let i = 1; i < 21; i++) {
    if (i % 2 === 0) {
        pares++
    }
}
console.log(pares)
/**
 * Soma dos números dentro de um laço for
 * @author Emmanuel L. Nogueira
 */

console.clear();

// Importar o pacote readline-sync (input no console)
const input = require('readline-sync');

let soma = 0;

for (let i = 1; i < 101; i++) {
    soma += i;
}

console.log(soma);
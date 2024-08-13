/**
 * Tabuadas (exemplo de encadeamento do laço for)
 * @author Emmanuel L. Nogueira
 */

// Importar o pacote readline-sync (input no console)
const input = require('readline-sync');

console.clear();

for (let i = 1; i < 11; i++) {
    console.log("");
    console.log(`Tabuada do ${i}: `);
    for (let j = 1; j < 11; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}
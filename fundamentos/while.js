/**
 * Estudo das estruturas while e do-while
 * @author Emmanuel L. Nogueira
 */

console.clear(); // Limpar a tela.

// Importar o pacote readline-sync (input no console)
const input = require('readline-sync');

// Modificar os valores para testar a diferença entre while e do-while
let x = 1;
let y = 1;

while (x < 11) {
    console.log("Teste da estrutura while");
    x++
}

input.question("Pressione a tecla [Enter] para continuar");
console.clear();
do {
    console.log("Teste da estrutura do-while");
    y++
} while (y < 11);
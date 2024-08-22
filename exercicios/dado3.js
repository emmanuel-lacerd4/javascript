/**
 * Jogo do dado - Exemplo de uso de uma função simples
 * @author Emmanuel L. Nogueira
 */

console.clear() // Limpar a tela.

// Importar o pacote readline-sync (input no console)
const input = require('readline-sync')

// Variáveis
let face
let confirma = "n"

// Entrada
function jogarDado() {
    console.clear()
    console.log("Jogo do dado")
    input.question("Pressione a tecla [Enter] para jogar o dado: ")
    face = Math.floor(Math.random() * 6 + 1)
    console.log(`Face do dado: ${face}`)
}

// Processamento/Saída
jogarDado()

confirma = input.question("Deseja jogar novamente? (s/n): ")

if (confirma === "s") {
    jogarDado()
}
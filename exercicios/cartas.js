/**
 * Jogo de Cartas
 * Exemplo do uso de um array
 * @author Emmanuel L. Nogueira
 */

console.clear() // Limpar a tela.

// Importar o pacote readline-sync (input no console)
const input = require('readline-sync')

console.log("Sorteio de uma carta")
console.log("")
input.question("Pressione a tecla [Enter] para sortear uma carta")
console.log("")
//           [0],[1],[2],[3]
let nipes = ["♡","♤","♢","♧"]
//          [0],[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11],[12]
let faces = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]

// Apoio a lógica

// Az de ouros
//console.log(`${faces[0]}${nipes[2]}`)

// Dama de copas
//console.log(`${faces[11]}${nipes[0]}`)

// Lógica para o sorteio de uma carta
let nipe = nipes[Math.floor(Math.random()*4)]
let face = faces[Math.floor(Math.random()*13)]
console.log(" __ ")
console.log(`|${[face]}${[nipe]}|`)
console.log("|__|")
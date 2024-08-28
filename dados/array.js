/**
 * Estrutura de dados
 * Array (vetor)
 * @author Emmanuel L. Nogueira
 */

console.clear() // Limpar a tela.

// Array simples
//                 [0]          [1]        [2]         [3]
let times = ["Corinthians", "São Paulo", "Santos", "Palmeiras"]
console.log(typeof (times))
console.log(times)
console.table(times)
console.log(times[0])
console.log(times[3])

// Array multidimensional (matriz)
let boletim = [[8, 7, 9, 3], [4, 5, 8, 6]] // "Linhas de uma tabela"
console.log(boletim)
console.table(boletim)
console.log(boletim[0][1]) // [linha][coluna]
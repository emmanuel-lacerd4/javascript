/**
 * Estudos da variáveis - tipagem dinâmica
 * @author Emmanuel L. Nogueira
 */

console.clear() // Limpar a tela.
console.log("strings___________________________")
let nome = "Emmanuel Lacerda Nogueira"
console.log(typeof (nome))
console.log(nome)
// Concatenação (unir um texto com o conteúdo de uma variável).
console.log("Professor: " + nome) // Evitar concatenar desta forma.
console.log(`Professor: ${nome}`)
console.log("números___________________________");
let peso = 90
let altura = 1.75
console.log(typeof (peso))
console.log(typeof (altura))
console.log(Number.isInteger(peso))
console.log(Number.isInteger(altura))
let imc = peso / (altura * altura)
console.log(`IMC: ${imc.toFixed(2)}`) // toFixed(2) arredondar 2 casas decimais
// Atenção!!!
console.log(10 / 0)
console.log("3" + 2)
console.log("3" - 2)
console.log("3" * 2)
console.log("3" / 2)
console.log("3x" - 2)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)
console.log("booleanos___________________________");
let chave = true;
console.log(typeof (chave));
let lampada = false;
console.log(typeof (lampada));
console.log(`Chave: ${chave} Lâmpada: ${lampada}`);
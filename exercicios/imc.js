/**
 * Cálculo do IMC
 * @author Emmanuel L. Nogueira
 */

console.clear(); // Limpar a tela.

// Importar o pacote colors
const colors = require('colors');

// Importar o pacote readline-sync (input no console)
const input = require('readline-sync');

// Variáveis
let nome, idade, peso, altura, imc;

console.log("____  ___  __  ___");
console.log("|   | |  \/ | / __| ");
console.log(" ||   | |\/ || (__");
console.log("|___| |_| |_| \___|");
console.log("");

// Entrada

nome = input.question("Digite o seu nome: ");
idade = Number(input.question("Digite a sua idade: "));
peso = Number(input.question("Digite o seu peso em Kg: ").replace(",", "."));
altura = Number(input.question("Digite a sua altura em cm: "));

// Processamento
imc = peso / ((altura / 100) * (altura / 100));

// Saída
console.log("");
console.log("----------------------------------");
console.log("Ficha do Aluno".italic.bold);
console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
console.log(`Peso: ${peso}`);
console.log(`Altura: ${altura}`);
console.log(`IMC: ${imc.toFixed(1)}`);

if (imc < 18.5) {
    console.log("Abaixo do peso".cyan);
} else if (imc < 25) {
    console.log("Peso normal".green);
} else if (imc < 30) {
    console.log("Acima do peso".yellow);
} else if (imc < 35) {
    console.log("Obesidade Grau I".yellow);
} else if (imc < 40) {
    console.log("Obesidade Grau II".red);
} else {
    console.log("Obesidade Grau III".red.bold);
}
console.log("");
console.log("----------------------------------");
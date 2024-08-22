/**
 * 
 * @author Emmanuel L. Nogueira
 */

console.clear() // Limpar a tela.

// Importar o pacote readline-sync (input no console)
const input = require('readline-sync')

let calculadora

console.log("1. Somar")
console.log("2. Subtrair")
console.log("3. Multiplicar")
console.log("4. Dividir")
console.log("5. Porcentagem")
console.log("________________________________")
console.log("")

calculadora = Number(input.question("Digite a opcao desejada: "))


// Lógica da calculadora
switch (calculadora) {
    case 1:
        console.log("Usuário escolheu a soma!")
        let soma = (num1, num2) => console.log(num1 + num2)
        soma(10, 2)
        break
    case 2:
        console.log("Usuário escolheu subtração")
        let subtracao = (num1, num2) => console.log(num1 - num2)
        subtracao(10, 2)
        break
    case 3:
        console.log("Usuário escolheu multiplicação")
        let multiplicacao = (num1, num2) => console.log(num1 * num2)
        multiplicacao(10, 2)
        break
    case 4:
        console.log("Usuário escolheu divisão")
        let divisao = (num1, num2) => console.log(num1 / num2)
        divisao(10, 2)
        break
    case 5:
        console.log("Usuário escolheu porcentagem")
        let porcentagem = (num1, num2) => console.log(num1 / num2) * 100
        porcentagem(10, 2)
        break
    default:
        console.log("Opção Invalida")
}
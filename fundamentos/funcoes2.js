/**
 * Estudo das funções em JavaScript
 * Funções com parâmetros
 * @author Emmanuel L. Nogueira
 */

console.clear(); // Limpar a tela.

// IMPORTANTE!!! Funções aribuídas obrigatoriamente precisam ser criadas no início do código (antes de serem executadas)

// Função literal com parâmetros
function somar(num1, num2) {
    return (console.log(num1 + num2));
}

somar(2, 5);

// Função atribuída (função anônima) com parâmetros
let somarAtribuida = function (num1, num2) {
    return (console.log(num1 + num2));
}

somarAtribuida(4, 9);

// Função atribuída simplificada (arrow function) com parâmetros
let somarAF = (num1, num2) => {
    return (console.log(num1 + num2));
}

somarAF(2, 2);

// Função atribuída simplificada (arrow function) com parâmetros 1 linha de código (neste caso o return é implícito)
let somarAFS = (num1, num2) => console.log(num1 + num2);

somarAFS(3, 3);
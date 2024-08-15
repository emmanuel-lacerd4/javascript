/**
 * Estudo das funções em JavaScript
 * Funções simples 
 * @author Emmanuel L. Nogueira
 */

console.clear(); // Limpar a tela.

// Função simples (literais)
function hello() {
    console.log("Hello function");
}

// Para executar uma função basta escrever o nome dela seguido de parênteses
hello();
console.log(typeof (hello));

// Função atribuída (função anônima)
const hello2 = function () {
    console.log("Hello function atribuída");
}

hello2();
console.log(typeof (hello2));

// Função atribuída simplificada (arrow function)
const hello3 = () => {
    console.log("Hello arrow function");
}

hello3();
console.log(typeof (hello3));

// Função atribuída simplificada (arrow function) 1 linha de código
const hello4 = _ => console.log("Hello arrow function one line");

hello4();
console.log(typeof (hello4));
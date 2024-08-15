/**
 * Estudo das variáveis - const, let e  var
 * @author Emmanuel L. Nogueira
 */

console.clear(); // Limpar a tela.
console.log("const___________________________");
const nome = "Emmanuel Lacerda Nogueira";
console.log(typeof (nome));
console.log(nome);
//nome = "Emmanuel L. Nogueira";
console.log("let___________________________");
let linguagem = "Java";
console.log(linguagem);
linguagem = "JavaScript";
console.log(linguagem);
//let linguagem = "Python";
//console.log(linguagem);
console.log("var___________________________");
var time = "São Paulo";
console.log(time);
time = "Palmeiras";
console.log(time);
var time = "Corinthians"; // Atenção! - Bugs no uso do var. 
console.log(time);
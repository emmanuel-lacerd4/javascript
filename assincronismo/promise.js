/**
 * Assincronismo - Promises
 * Fetch
 * @author Emmanuel L. Nogueira
 */

const input = require('readline-sync')

console.clear()
console.log("ViaCEP")

let cep = input.question("Digite o CEP: ")
let urlAPI = `https://viacep.com.br/ws/${cep}/json/`
// Teste da captura do CEP
//console.log(urlAPI)
// Uso do promise (fetch)
fetch(urlAPI)
    .then((response) => {
        return response.json()
    })

    .then((dados) => {
        console.log(dados.logradouro)
        console.log(dados.bairro)
        console.log(dados.localidade)
        console.log(dados.uf)
    })

    .catch((error) => {
        console.log(error)
    })
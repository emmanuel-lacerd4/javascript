/**
 * Estrutura de dados
 * Objetos
 * @author Emmanuel L. Nogueira
 */

const funcionario1 = {}
console.log(typeof(funcionario1))
// Adicionar dados a estrutura (CRUD Create)
funcionario1.nome = "Emmanuel L. Nogueira"
funcionario1.cargo = "Técnico em Informática"
funcionario1.email = "emmanuellacerd4@gmail.com"
funcionario1.salario = 1500
funcionario1.insta = "@emmanuel.lacerd4"
// Listar os dados da estrutura (CRUD Read)
console.log(funcionario1)
console.log(funcionario1.cargo)
// Modificar os dados da estrutura (CRUD Update)
funcionario1.nome = "Emmanuel"
console.log(funcionario1)
// Excluir dados da estrutura (CRUD Delete)
delete funcionario1.insta
console.log(funcionario1)

const funcionario2 = {
    nome: "Bruce Wayne",
    cargo: "CEO",
    email: "batman@gmail.com",
    salario: 40000
}

console.log(funcionario2)

const endereco1 = {
    logradouro: "Bat Caverna",
    cidade: "Gothan City",
    estado: "New Jersey"
}

console.log(endereco1)

const funcionario3 = {
    nome: "Alfred Pennywort",
    cargo: "mordomo",
    email: "alfred@gmail.com",
    salario: 20000,
    ...endereco1 //..spread operador (união de duas estruturas)
}

console.log(funcionario3)

const funcionario4 = {
    nome: "Dick Grayson",
    cargo: "Acrobata",
    email: "robin@gmail.com",
    salario: 2000,
    ...endereco1
}

console.log(funcionario4)

const funcionario5 = {
    nome: "Tony Stark",
    cargo: "Engenheiro",
    email: "ironman@outlook.com",
    salario: 375000,
    armadura: {
        versao: "Mark II",
        ano: 2010,
        reator: "Arc 01",
    },
    switUp: () => {
        console.log("🤖")
    }
}

console.log(funcionario5)
console.log(funcionario5.cargo)
console.log(funcionario5.armadura.versao)
funcionario5.switUp()
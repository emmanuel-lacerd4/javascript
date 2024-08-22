/**
 * POO - Fundamentos da programação orientada a objetos
 * Encapsulamento
 * @author Emmanuel L. Nogueira
 */

// Sistema
console.clear()

class Usuarios {
    // Atributos
    constructor(login, senha) {
        this.login = login // Atributo público
        //----------------------------------------------------
        let _senha = senha // Atributo privado(encapsulamento)
        // Método para obter a senha (get)
        this.getSenha = () => _senha
        // Método para modificar a senha (set)
        this.setSenha = (novaSenha) => _senha = novaSenha
        //----------------------------------------------------
    }

    // Métodos
    logar() {
        console.log(`Usuário: ${this.login}`)
        console.log(`Senha: ${this.getSenha()}`)
        if (this.login === "admin" && this.getSenha() === "123@$enaç") {
            console.log("Usuário autenticado")
        } else {
            console.log("Usuário e/ou senha inválido")
        }
    }
}

// Criar um novo usuário
const user1 = new Usuarios("admin", "123456")
user1.logar()
user1.setSenha("123@$enaç") // Setar senha do usuário
user1.logar()
/**
 * Exercício de fixação dos conceitos de POO
 * Agência Bancária
 * @author Emmanuel L. Nogueira
 */

console.clear() // Limpar a tela.

// Importar o pacote colors
const colors = require('colors')

// Classe modelo
class Conta {
    // Atributos encapsulados
    constructor(numero, titular, saldo) {
        this._numero = numero
        this._titular = titular
        this._saldo = saldo
    }
    // Métodos
    getNumero() {
        return this._numero
    }

    getTitular() {
        return this._titular
    }

    getSaldo() {
        return this._saldo
    }
    exibirSaldo() {
        console.log(`O saldo da conta de ${this.getTitular()} é R$ ${this.getSaldo().toFixed(2)}`)
    }
    depositar(valor) {
        this._saldo += valor
        console.log(`Crédito de R$ ${valor.toFixed(2)}`.green)
    }
    sacar(valor) {
        if (valor > this._saldo) {
            console.log(`* Debito de R$ ${valor.toFixed(2)}`.red)
            console.log("Operação negada. Saldo insuficiente.")
        } else {
            this._saldo -= valor
            console.log(`Debito de R$ ${valor.toFixed(2)}`.red)
        }

    }
    pix(valor, destino) {
        if (valor > this._saldo) {
            console.log(`PIX de R$ ${valor.toFixed(2)} não realizado. Saldo insuficiente.`.red)
        } else {
            this._saldo -= valor
            destino.depositar(valor)
            console.log(`PIX de R$ ${valor.toFixed(2)} para ${destino.getTitular()} realizado com sucesso`.red.bold)
        }
    }
}

class ContaPoupanca extends Conta {
    // Atributos
    constructor(numero, titular, saldo) {
        super(numero, titular, saldo)
    }
    // Método
    exibirSaldoPoupanca() {
        console.log(`O saldo da conta poupança de ${this.getTitular()} é R$ ${this.getSaldo().toFixed(2)}`)
    }
}

console.log("██████   █████  ███    ██  ██████  ██████  ".red)
console.log("██   ██ ██   ██ ████   ██ ██      ██    ██ ".yellow)
console.log("██████  ███████ ██ ██  ██ ██      ██    ██ ".green)
console.log("██   ██ ██   ██ ██  ██ ██ ██      ██    ██ ".blue)
console.log("██████  ██   ██ ██   ████  ██████  ██████  ".magenta)
console.log("")

let cc1 = new Conta(1, "Robson Vaamonde", 3000)
console.log(`Cliente: ${cc1.getTitular()} | conta: ${cc1.getNumero()}`.bold)
cc1.exibirSaldo()
cc1.depositar(10000)
cc1.exibirSaldo()
cc1.sacar(5000)
cc1.exibirSaldo()
console.log("")

let cc2 = new Conta(2, "Sirlene Sanches", 1400)
console.log(`Cliente: ${cc2.getTitular()} | conta: ${cc2.getNumero()}`.bold)
cc2.exibirSaldo()
cc2.depositar(1)
cc2.exibirSaldo()
cc2.sacar(1400)
cc2.exibirSaldo()
cc2.sacar(1)
cc2.exibirSaldo()
console.log("")

let cc3 = new Conta(3, "Leandro Ramos", 5000)
console.log(`Cliente: ${cc3.getTitular()} | conta: ${cc3.getNumero()}`.bold)
cc3.exibirSaldo()
cc3.depositar(5000)
cc3.exibirSaldo()
cc3.pix(1000, cc2)
cc3.exibirSaldo()
cc2.exibirSaldo()

console.log("__________________________________________")
console.log("")
let cp1 = new ContaPoupanca(10, "Robson Vaamonde", 1000)
console.log(`Cliente: ${cp1.getTitular()} | conta: ${cp1.getNumero()}`.yellow.bold)
cp1.exibirSaldoPoupanca()
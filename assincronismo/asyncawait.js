/**
 * Assincronismo
 * Async - Await
 * @author Emmanuel L. Nogueira
 */

// Biblioteca interna do JavaScript para lidar com arquivos.
const fs = require('fs')

async function criarArquivo() {
    let conteudo = "Emmanuel L. Nogueira\nExemplo de uso dos recursos async - await"
    await gravarArquivo("teste.txt", conteudo)
}

async function gravarArquivo(path, conteudo) {
    try {
        await fs.promises.writeFile(path, conteudo)
        console.log("Arquivo gravado com sucesso")
    } catch (error) {
        console.log(error)
    }
}

console.clear()
criarArquivo()
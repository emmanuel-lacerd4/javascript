/**
 * POO - Fundamentos da programação orientada a objetos
 * Abstração - Herança - Polimorfismo
 * @author Emmanuel L. Nogueira
 */

console.clear(); // Limpar a tela.

// Classe modelo (abstração)
class Bloco {
    // Atributos
    constructor(resistencia, textura) {
        this.resistencia = resistencia;
        this.textura = textura;
    }
    // Métodos
    criarBloco() {
        console.log("------------------------------------");
        console.log("┍━┑");
        console.log("┕━┙");
        console.log(`Bloco de ${this.textura}`);
        console.log(`Resistência: ${this.resistencia}`);
    }
    construir() {
        console.log(`Bloco de ${this.textura} colocado.`);
    }

    mineirar() {
        console.log("☐ ☐ ☐ Recursos obtidos!");
    }
}

// Classe modelo com herança (extends)
class Enxada extends Bloco {
    // Atributos
    constructor(resistencia, textura, conquista) {
        super(resistencia, textura);
        this.conquista = conquista;
    }

    // Métodos
    criarEnxada() {
        console.log("------------------------------------");
        console.log("-_");
        console.log(" /");
        console.log(`Enxada de ${this.textura}`);
        console.log(`Resistência: ${this.resistencia}`);
    }

    arar() {
        console.log("._._._. Terra arada!");
        if (this.conquista === true) {
            console.log("*** Conquista obtida!");
        }
    }

    // Polimorfismo (sobrescrita de um método existente)
    mineirar() {
        console.log("XxX Dano atribuído!");
    }
}




// Criação do mundo
console.log(" _____ _____ _____ _____ _____ _____ _____ _____ _____ ");
console.log("|     |     |   | |   __|     | __  |  _  |   __|_   _|");
console.log("| | | |-   -| | | |   __|   --|    -|     |   __| | | ");
console.log("|_|_|_|_____|_|___|_____|_____|__|__|__|__|__|    |_|");
console.log("");

// Criando um objeto (bloco de terra)
const bloco1 = new Bloco(1, "Terra");
bloco1.criarBloco();

// Criando um objeto (bloco de madeira)
const bloco2 = new Bloco(2, "Madeira");
bloco2.criarBloco();
bloco2.construir();

// Criando um objeto (bloco de pedra)
const bloco3 = new Bloco(5, "Pedra");
bloco3.criarBloco();
bloco3.mineirar();

// Criando um objeto (enxada de madeira)
const enxada1 = new Enxada(2, "Madeira", false);
enxada1.criarEnxada();
enxada1.arar();

// Criando um objeto (enxada de ferro)
const enxada2 = new Enxada(5, "Ferro", true);
enxada2.criarEnxada();
enxada2.arar();

// Criando um objeto (enxada de diamante(polimorfismo))
const enxada3 = new Enxada(10, "Diamante", false);
enxada3.criarEnxada();
enxada3.mineirar();
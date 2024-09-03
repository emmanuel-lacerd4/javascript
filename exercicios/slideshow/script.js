/**
 * Simples carrosel de imagens
 * @author Emmanuel L. Nogueira
 */

//                [0]           [1]           [2]
let slides = ["slide1.jpg", "slide2.jpg", "slide3.jpg"]
let = intervalo = 3000 // Ajuste do tempo de troca
let indice = 2 // Apoio a lógica

show()

function show() {
    // A linha abaixo adiciona a classe fadeOut ao documento HTML na tag identificada como slide
    document.getElementById('slide').className += 'fadeOut'
    // setTimeout(gera um temporizador)
    setTimeout(() => {
        document.getElementById('slide').src = (`imagens/${slides[indice]}`)
        document.getElementById('slide').className = ''
    }, 1000) // Trocar a cada 1s (1000ms = 1s)
    indice++
    if (indice === slides.length) { // .length (tamanho máximo)
        indice = 0
    }
    setTimeout(show, intervalo) // Executar a função a cada 3s
}
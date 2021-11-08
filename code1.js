const string = 'dlrow olleh'

let newString = string.split('').reverse().join('');

console.log(`Questão 1:\nInvertida: ${newString}`)


let frase = "Nossa missão é democratizar e desmistificar os investimentos em ativos digitais"

const array = frase.split(" ")

let maior = ''
let igual = ''


const returnSizes = (item) => {
    const tamanhoAtual = item.split('').length
    const tamanhoMaior = maior.split('').length
    return { tamanhoAtual, tamanhoMaior }
}

array.map(item => {
    const {tamanhoAtual, tamanhoMaior} = returnSizes(item)
    if(tamanhoAtual > tamanhoMaior) {
        maior = item
    }
})


array.map(item => {
    const {tamanhoAtual, tamanhoMaior} = returnSizes(item)
    if(tamanhoAtual === tamanhoMaior && item !== maior) {
        igual = item
    }
})


const novaFrase =  frase.replace(maior,'propagar')

console.log(`Questão 2:\nMaior: ${maior} - Igual a maior: ${igual} - Frase final: ${novaFrase}`)
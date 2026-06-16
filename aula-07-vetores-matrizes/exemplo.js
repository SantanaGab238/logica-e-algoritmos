const prompt = require('prompt-sync') ()

console.log('--- Vetores com loop ---')
console.log('Digite o nome de 5 filmes ')
console.log('')

//Criando o vetor para guardar os valores
const filmes = []

// Estrutura de repetição para coletar o nome dos 5 filmes
for (let i = 0; i < 5; i++){
    filmes[i] = prompt (`Digite o Nome do ${i + 1}° filme `)
}

//Exibindo o nome dos filmes coletados
console.log('_____________________')
console.log('')

for (let i = 0; i <5; i++) {
    console.log(`Nome do ${i + 1}° filme digitado: ${filmes [i]}`)
}

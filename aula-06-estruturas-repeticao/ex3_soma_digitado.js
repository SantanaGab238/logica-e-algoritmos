// Rodar npm install prompt-sync

// Importa o módulo (Para rodar algoritmo no terminal)
const prompt = require('prompt-sync')(); 

let numero = Number(prompt("Digite um número inteiro positivo: "))
let contador = 1;
let soma = 0;

while (contador <= numero ) {
    soma +=contador
    contador ++
}

console.log (soma)
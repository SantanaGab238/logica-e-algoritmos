const prompt = require('prompt-sync')();

let numeros = [];

// Entrada dos dados
for (let i = 0; i < 5; i++) {
    numeros[i] = parseInt(prompt(`Digite o ${i + 1}º número inteiro: `));
}

// Saída em ordem inversa
console.log("\nNúmeros na ordem inversa:");

for (let i = 4; i >= 0; i--) {
    console.log(numeros[i]);
}
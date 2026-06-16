const prompt = require('prompt-sync')();

let produtos = [];

// Entrada dos dados
for (let i = 0; i < 5; i++) {
    produtos[i] = prompt(`Digite o nome do produto ${i + 1}: `);
}

console.log("\nLista de Compras:");

// Saída dos dados
for (let i = 0; i < 5; i++) {
    console.log(`${i + 1}. ${produtos[i]}`);
}
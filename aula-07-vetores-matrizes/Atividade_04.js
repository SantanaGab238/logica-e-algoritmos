const prompt = require('prompt-sync')();

let gols = [];
let maisDe3 = 0;
let tresOuMenos = 0;

// Entrada dos dados
for (let i = 0; i < 5; i++) {
    gols[i] = parseInt(prompt(`Digite a quantidade de gols do time ${i + 1}: `));
}

// Percorre o vetor e faz a contagem
for (let i = 0; i < 5; i++) {
    if (gols[i] > 3) {
        maisDe3++;
    } else {
        tresOuMenos++;
    }
}

// Exibição dos resultados
console.log("\nResultado:");
console.log(`Times com mais de 3 gols: ${maisDe3}`);
console.log(`Times com 3 gols ou menos: ${tresOuMenos}`);
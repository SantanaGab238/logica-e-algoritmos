const prompt = require('prompt-sync')();

let precos = [];
let maiorPreco, menorPreco;

// Leitura dos preços
for (let i = 0; i < 6; i++) {
    precos[i] = parseFloat(prompt(`Digite o preço do produto ${i + 1}: `));

    if (i === 0) {
        maiorPreco = precos[i];
        menorPreco = precos[i];
    } else {
        if (precos[i] > maiorPreco) {
            maiorPreco = precos[i];
        }

        if (precos[i] < menorPreco) {
            menorPreco = precos[i];
        }
    }
}

// Exibição dos resultados
console.log("\nPreços informados:");
for (let i = 0; i < 6; i++) {
    console.log(`Produto ${i + 1}: R$ ${precos[i].toFixed(2)}`);
}

console.log(`\nMaior preço: R$ ${maiorPreco.toFixed(2)}`);
console.log(`Menor preço: R$ ${menorPreco.toFixed(2)}`);
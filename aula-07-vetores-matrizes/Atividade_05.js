const prompt = require('prompt-sync')();

let nome = [];
let idade = [];

// Cadastro dos pratos
for (let i = 0; i < 3; i++) {
    nome[i] = prompt(`Digite o nome ${i + 1}: `);
    idade[i] = prompt(`Digite a idade ${i + 1}: `);
}

// Exibição do cardápio
console.log("\n--- Cardápio ---");

for (let i = 0; i < 4; i++) {
    console.log(`${i + 1}. ${pratos[i]} - R$ ${precos[i].toFixed(2)}`);
}

// Escolha do usuário
let opcao = parseInt(prompt("\nEscolha um prato pelo número (1 a 4): "));

// Validação da opção
if (opcao >= 1 && opcao <= 4) {
    console.log(`\nVocê escolheu: ${pratos[opcao - 1]}`);
    console.log(`Preço: R$ ${precos[opcao - 1].toFixed(2)}`);
} else {
    console.log("\nOpção inválida! Escolha um número entre 1 e 4.");
}
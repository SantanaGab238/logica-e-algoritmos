const prompt = require('prompt-sync')(); 

let somaNotas = 0;
let contadorAlunos = 0;
let nota;


nota = parseFloat(prompt("Digite a nota do aluno (ou -1 para sair):"));


while (nota !== -1) {
    
    if (!isNaN(nota) && nota >= 0) {
        somaNotas += nota;       
        contadorAlunos++;        
    } else {
        console.log("Por favor, digite uma nota válida ou -1 para sair.");
    }

    
    nota = parseFloat(prompt("Digite a nota do próximo aluno (ou -1 para sair):"));
}


if (contadorAlunos > 0) {
    let media = somaNotas / contadorAlunos;
    
    console.log("Quantidade de alunos: " + contadorAlunos + " Média das notas: " + media);
} else {
    console.log("Nenhuma nota válida foi inserida.");
}
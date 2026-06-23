//ASSUNTO: VETORES

//vetor com nomes de alunos
let alunos = ["Ana", "Bruno", "Carlos", "Diana"];//o vetor começa a contar do 0 

//vetor com notas de alunos
let notas = [8.5, 3, 8, 10];

console.log(alunos)//Exibe os dados do vetor todo

console.log(alunos[3])//Diana
console.log(alunos[0])//Ana

alunos[2] = "Antônio";
console.log(alunos);//vetor todo (agora com Antônio)

//for para percorrer cada indice do vetor alunos
for(let cont = 0; cont < 4; cont++) {

    console.log(`Aluno(a) ${cont + 1} : ${alunos[cont]}`);

}


//Exibindo todas as notas
console.log(notas);

console.log(notas[2]);

//for para percorrer cada indice dos dois vetores
for(let cont = 0; cont < 4; cont++) {

console.log(`Nome: ${alunos[cont]} - Nota: ${notas[cont]}`);

}

console.log(alunos.length); //Tamanho do vetor : 4
for(let cont = 0; cont < alunos.length; cont++) {
    
    console.log(`Aluno(a) ${cont + 1} : ${alunos[cont]}`);

}

// Exemplo com for of
for(let aluno of alunos) {

    console.log(`Nome: ${aluno}`);

}


//Exemplos forEach
//Aluno recebe o dado do vetor, indice recebe o indice do vetor
//estes parâmetros funcionam NESTA ORDEM. Não devem ser invertidos

alunos.forEach(function(aluno, indice) {

    console.log(`Índice: ${indice}, aluno: ${aluno}`);

}
);

//métodos push, unshift, pop e shift
//push - adiciona ao final do vetor
alunos.push("Raimundo");
console.log(alunos);

// pop - remove do final do vetor
alunos.pop();
console.log(alunos);

//unshift - adiciona ao início do vetor
alunos.unshift("Raimundo")
console.log(alunos);

//shift - remove do inicio do vetor
alunos.shift();
console.log(alunos);


//material 07 - página 16

//declarando um vetor (ou array) de objetos "alunos"

let alunos = [

    { nome: "Ana", idade: 18, ativo: true },
    { nome: "Carlos", idade: 22, ativo: false },
    { nome: "Maria", idade: 20, ativo: true },
];

console.log(alunos);

//Acessando pelo índice + propriedade
console.log(`Nome do primeiro aluno(a): ${alunos[0].nome}`);

// Não funciona desta forma:
console.log(`Todos os dados do primeiro aluno(a): ${alunos[0]}`);

//Funciona:
console.log(alunos[0]);

//percorrendo o vetor de objetos com for clássico
for ( let cont = 0; cont < alunos.length; cont++) {

    console.log(`Nome: ${alunos[cont].nome}`);
    console.log(`Idade: ${alunos[cont].idade}`);
    console.log(`Ativo: ${alunos[cont].ativo} \n`);//contra barra + n pula uma linha

};

//percorrendo o vetor de objetos com for of
for (let aluno of alunos){

    console.log(`Nome: ${aluno.nome}`);
    console.log(`Idade: ${aluno.idade}`);
    console.log(`Ativo: ${aluno.ativo}\n`);

};



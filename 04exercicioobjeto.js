
// execício material 07 - página 14

//item 1
let aluno = {

    nome: "Arthur",
    idade: 20,
    matriculado: true

}

//item 2
console.log(`Nome do aluno: ${aluno.nome}`);

console.log(`Idade do aluno: ${aluno.idade}`);

if(aluno.matriculado) {

    console.log(`Situação: Matriculado`);

} else {

    console.log(`Situação: Não está matriculado`);

};

//item 3 - modificar a idade
aluno.idade = 21;
console.log(aluno);


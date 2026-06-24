// declarando um objeto chamado aluno EM TYPESCRIPT

let aluno:{nome:string; idade: number; ativo: boolean} = {
   
    nome: "João", 
    idade: 20,
    ativo: true

};

console.log (aluno); //exibe o objeto completo

console.log (aluno.nome);

console.log(`Nome do aluno: ${aluno.nome}`);

console.log(`Idade do aluno: ${aluno.idade}`);


//Quando é boolean não precisa ser testado então poderia ser if(aluno.ativo) seria igual a if(aluno.ativo === true)
//caso eu quisesse sem fazer teste por em false seria só colocar if(!aluno.ativo) seria igual a if(aluno.ativo === false)

if(aluno.ativo === true) {

    console.log(`Situação: Ativo`);

} else {

    console.log(`Situação: Inativo`);

};
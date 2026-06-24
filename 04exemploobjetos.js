
// declarando um objeto chamado aluno
let aluno = {

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


let propriedade = "nome";

console.log(aluno[propriedade]); // João

//Também fuciona diretamente
console.log(aluno["idade"]); // 20


// Declarando novo objeto
let produto = {

    nome: "Notebook",
    preco: 3000

};

console.log(produto);

//Modificando o preço do notebook
produto.preco = 2800;

console.log(produto);

//Adicionar uma nova propriedade (uma nova chave)
produto.estoque = 15;
console.log(produto);




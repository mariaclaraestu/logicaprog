//vetor com nomes de alunos
let alunos = ["Ana", "Bruno", "Carlos", "Diana"];//o vetor começa a contar do 0 

//vetor com notas de alunos
let notas = [8.5, 3, 8, 10];

for(let cont = 0; cont < 4; cont++) {

   
console.log(`Nome: ${alunos[cont]} - Nota: ${notas[cont]}`);

 if(notas[cont] >= 5) {

        console.log(`APROVADO`);

    } else if (notas[cont] < 5) {

        console.log(`REPROVADO`);

    } else;


}
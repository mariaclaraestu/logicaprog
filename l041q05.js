//Desenvolver um programa que pergunte 4 notas escolares de um aluno e exiba mensagem informando que o
//aluno foi aprovado se a média escolar for maior ou igual a 5. Se o aluno não foi aprovado, indicar uma
//mensagem informando essa condição. Apresentar junto com a mensagem de aprovação ou reprovação o valor
//da média obtida pelo alunoa

let nota1, nota2, nota3, nota4, media;

console.log (`Informe sua primeira nota:`);
nota1 = 5;

console.log (`Informe sua segunda nota:`);
nota2 = 5;

console.log (`Informe sua terceira nota:`);
nota3 = 5;

console.log (`Informe sua quarta nota:`);
nota4 = 4;

media = (nota1 + nota2 + nota3 + nota4) /4;


if(media >= 5) {
    console.log(`Parabêns!Sua média é ${media.toFixed(1)} você foi aprovado`);
} else {
    console.log(`Sua média é ${media.toFixed(1)} e está baixo do esperado, você está de recuperação.`);
}
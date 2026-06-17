//Fazer um programa que pergunte o salário de um funcionário e apresente este salário com um aumento de 15%.

let salario, aumento, soma;

console.log ("Informe seu sálario");
salario = 1000.00;

aumento = salario * 15/100;
soma = aumento + salario;

console.log (`Seu salário com o aumento é: R$ ${soma.toFixed(2)}`);


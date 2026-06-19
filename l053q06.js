/*
6) Desenvolver um programa que apresente o valor de uma potência de uma base qualquer elevada a um expoente
qualquer, ou seja, de be
, onde os valores de b e e são fornecidos pelo usuário, sem utilizar Math.pow().
*/

let base;
let expo;
let pot;

console.log ("Informe o valor da base da potência:")
base = 2

console.log ("Informe o valor do expoente da potência:")
expo = 2

console.log (`Valores inseridos: Base: ${base}, Expoente: ${expo}`);

pot = 1


for (let cont = 1 ; cont <= expo ; cont ++){
    
    pot = pot * base

} 

console.log (`${base} elevado à ${expo} = ${pot} `)
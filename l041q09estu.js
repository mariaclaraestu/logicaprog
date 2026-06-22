/*
Desenvolver um programa que pergunte um número e exiba a informação de que ele é positivo, negativo ou
nulo.
*/

let num;

console.log (`Informe um número:`);
num = 0;
console.log (num);

if (num < 0 ) {

    console.log(`O número ${num} é negativo`);
    
} else if (num > 0) {

console.log(`O número ${num} é positivo`);

} else {

    console.log(`O número ${num} é nulo`);
}
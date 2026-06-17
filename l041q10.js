//Desenvolver um programa que pergunte dois números inteiros, e apresente como resultado se o segundo
//número informado é ou não um divisor do primeiro número informado.

let num1, num2;

console.log("Informe o primeiro número: ")
num1 = 2
console.log(`Primeiro número: ${num1}`)

console.log("Informe o segundo número: ")
num2 = 5
console.log(`Segundo número: ${num2}`)

if (num1 % num2 === 0 ){
    console.log("O segundo numero é divisor do primeiro")
}else{
    console.log("O segundo numero não é divisor do primeiro")
}

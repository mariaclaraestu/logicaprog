//Desenvolver um programa que pergunte um número e exiba a informação de que ele é positivo, negativo ou
//nulo.

let num;

console.log("Informe um número inteiro: ")
num = 0;
console.log(`número: ${num}`)

if (num > 0){
    console.log(`O numero ${num} é positivo.`)
} else if (num < 0){
    console.log(`O número ${num} é negativo.`)
} else {
    console.log(`O número ${num} é nulo.`)
}

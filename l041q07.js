//Desenvolver um programa que pergunte um valor inteiro positivo ou negativo, e exiba como resposta o módulo
//deste valor, ou seja, o número lido como sendo positivo.

let num, modulo;

console.log("Informe um valor: ")
num = -7
console.log(`Valor: ${num}`)

modulo = num * (-1)
if(num > 0){
    console.log(`O modulo desse valor é ${num}`)
} else {
    console.log(`O modulo do número é ${modulo}`)
}
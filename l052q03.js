/*
3) Desenvolver um programa que apresente o total da soma dos cinco primeiros números inteiros.
*/

let cont = 1;
let acum = 0;

do {

    acum += cont;

    cont += 1;

} while (cont <= 5); //menor que 6 tbm não estaria com a lógica errada

console.log(`A soma dos cinco primeiros números inteiros é ${acum} `)


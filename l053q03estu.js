/*
Desenvolver um programa que apresente os resultados de uma tabuada de um número qualquer informado
pelo usuário.
*/

let num;

console.log("Informe um número para ser exibida a tabuada: ");
num = 2;
console.log(`Número informado: `);

for(let cont = 0; cont <= 10; cont ++ ) {

    console.log(`${num} x ${cont} = ${num*cont}`)

}
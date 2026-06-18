/*
1) Desenvolver um programa que apresente todos os valores numéricos inteiros pares situados na faixa de 100 a
200.
*/

let cont = 100;

do {

    if(cont % 2 === 0) {
        console.log (cont);
    }

    cont = cont + 2;

} while (cont <= 200);
/*
3) Desenvolver um programa que apresente o total da soma dos cinco primeiros números inteiros.
*/

let cont,acum;


cont = 0;
acum = 0;


while(cont <= 5) {


acum = acum + cont

    
cont = cont + 1;
}

console.log(`A soma dos cinco primeiros números inteiros é ${acum}`)
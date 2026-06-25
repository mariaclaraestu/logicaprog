/*
Criar uma função calcularArea(base, altura) que
retorne a área de um retângulo
*/

function calcularArea(base: number, altura: number):number {

    let area: number = base * altura;
    return area;

};

let a: number = calcularArea(2, 3);
console.log (`A área do retângulo é ${a}`);

let n1: number = 5, n2 = 8;
let n3: number = calcularArea(n1, n2);
console.log (`A área do retângulo é ${n3}`);

/*Criar uma função converterCelsius(temp) que converta
Celsius para Fahrenheit: (temp * 9/5) + 32
*/

function converterCelsius(temp: number):number {

    return (temp * 9/5) + 32;

};

console.log (`40 Celsius = ${converterCelsius(40)} Fahrenheit`);

/*
Criar uma função saudacaoPersonalizada(nome) que
retorne "Olá, [nome]! Seja bem-vindo."
*/

function saudacaoPersonalizada(nome : string): string {

    return(`Olá, ${nome}! Seja bem-vindo.`)

}

console.log(saudacaoPersonalizada("Camile"));


let nome: string  = "Ana"
console.log(saudacaoPersonalizada(nome));
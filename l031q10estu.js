/*
10) Fazer um algoritmo que efetue o cálculo do valor de uma prestação em atraso, utilizando a fórmula prestação =
valor + (valor x (taxa : 100) x tempo em dias).
*/

let valor, tempdias, taxa, prestacao

console.log (`Informe um valor:`);
valor = 1000;
console.log (valor.toFixed(2));

console.log (`Informe valor da taxa:`);
taxa = 5;
console.log (`${taxa}%`);

console.log (`Informe os dias:`);
tempdias = 5
console.log (`${tempdias} dias de atraso`)

prestacao = (valor + (valor * (taxa / 100) * tempdias));

console.log (`O valor da prestação em atraso é: ${prestacao}`)

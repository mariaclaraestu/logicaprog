
let numeros = [10, 25, 37, 42, 58];

// Usando for clássico
for (let cont = 0; cont < numeros.length; cont++) {
console.log("Índice " + cont + ": " + numeros[cont]);
}

// Usando for...of
for (let num of numeros) {
console.log(num);
}

// Usando forEach
numeros.forEach((num, cont) => {
console.log(`Posição ${cont}: ${num}`);
});
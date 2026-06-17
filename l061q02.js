/*
Desenvolver um programa que pergunte o sexo da pessoa e dê como resposta a seguinte orientação de acordo
com o sexo informado: “Banheiro masculino à direita” ou “Banheiro feminino à esquerda”.
*/

let sexo

console.log (`Informe seu sexo: `)
sexo = "feminino"
console.log (`${sexo} `)

switch (sexo) {
    case "feminino":
       console.log("Banheiro feminino à esquerda "); 
       break

    case "masculino":
       console.log("Banheiro masculino à direita"); 
       break

    default:
       console.log("ERRO: Código inválido");  
       break


}
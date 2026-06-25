//material 08(Modularização e Funções) - Página 06

//Variável GLOBAL 
let num

// essa função com retorno(Função com retorno)
function somar (a, b) {

    //tudo que está dentro da chave só vai funcionar dentro das chaves (Variável local)
    let resultado = a + b;
    return resultado; 

};

direcionador();

// exibindo imediatamente o valor retornado pela função
console.log (somar(5, 3));

// guardando o valor retornado em uma variável
num = somar(10, 20);
console.log (num);

somar(4, 5); 
// o retorno da função se perde.
//se perdeu pq não tem onde guardar e não está exibindo(ela é temporaria).


// essa função não tem retorno(Função void)
function direcionador() {

    console.log("Siga em frente! Estude sempre!");

}

//chamando a função direcionador
direcionador();
direcionador();

let texto = direcionador();
console.log (texto); // Variável não recebe retorno da função

function mensagem() {

    return "Ame mais, brigue menos!"

}

//chamando a função mensagem()
mensagem(); // perdi o retorno da função

console.log( mensagem() ); // agora eu peguei o retorno


function tudao() {
   
    console.log("Início da função tudão")
    direcionador(); //chamando a função direcionador

    let calc = somar(2, 3);
    console.log(`Resultado da soma ${calc}`);

    let msg = mensagem();
    direcionador();
    console.log(`Mensagem do dia: ${msg}`);

    console.log("Fim da função tudão");

}

//chamando a função tudão
tudao()

/*
let cont //global
for(cont = 0 ; cont <= 3 ; cont ++ ) {

    console.log (cont);

};

console.log (cont); // deu bom, pq é global
*/

direcionador();
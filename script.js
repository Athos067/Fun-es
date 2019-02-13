/*
function NOME (ARGUMENTO, ARGUMENTO, ARGUMENTO, ARGUMENTO){
    EXECUÇÃO
}

NOME(PARAMETRO,PARAMETRO,PARAMETRO,PARAMETRO)
*/


function somaElevadaAoQuadrado(a=2, b=2) { //Assinatura da função
    let soma= a + b;
    return soma ** 2;
}

console.log(somaElevadaAoQuadrado(10,10));

// D20
/* function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}*/

const aleatorio = function(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

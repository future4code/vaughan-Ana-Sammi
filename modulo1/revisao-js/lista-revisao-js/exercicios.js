// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   return array.reverse()
}
//DESAFIO

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((function comparaNumeros(a, b) {
        return a-b
    }))
}
//DESAFIO

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayDePar = []
    for (i=0; i<array.length; i++){
        if (array[i] % 2 === 0) {
        arrayDePar.push(array[i]) 
        }
      
    } return arrayDePar
} 



// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayPotencia = []
    for (i=0; i<array.length; i++){
        if (array[i] % 2 === 0) {
        arrayPotencia.push(array[i] ** 2) 
        }
      
    } return arrayDePar 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
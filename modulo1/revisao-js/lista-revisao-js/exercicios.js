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
    let maiorNumero = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i]
    
        }
    }  return maiorNumero
} 

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior = 0;
    if (num1 > num2) {
        maior = num1
    } else {
        maior = num2
    }
    let menor = 0;
    if (num1 < num2) {
        menor = num1
    } else {
        menor = num2
    }
    let objeto = {
        maiorNumero: maior,
        maiorDivisivelPorMenor: maior % menor === 0,
        diferenca: maior - menor
    } 
    return objeto

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let array = []
    for (num = 0; num < n; num++) {
        array.push(num * 2)
    } return array
}
    

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let triangulo 
    if (ladoA === ladoB && ladoB === ladoC) {
        triangulo = 'Equilátero'
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        triangulo = 'Isósceles'
    } else {
        triangulo = 'Escaleno'
    } return triangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let maiorNumero = 0
    let menorNumero = Infinity
    for (i = 0; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i]
    } }
    
    for (j = 0; j < array.length; j++) {
        if (array[j] < menorNumero) {
        menorNumero = array[j];     
    } 
    }      


    let maiorNumero2 = 0
    let menorNumero2 = Infinity
   

    for (n = 0; n < array.length; n++) {
        if (array[n] !== maiorNumero) {
            if (array[n] > maiorNumero2) {
            maiorNumero2 = array[n]
                  
        }}} 
    for (n = 0; n < array.length; n++) {
        if (array[n] !== menorNumero) {
            if (array[n] < menorNumero2) {
            menorNumero2 = array[n]
               
            }}} return [maiorNumero2, menorNumero2]
}
    


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   filme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    }
    let frase = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
    return frase
}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   pessoa = {
       nome: pessoa.nome,
       idade: pessoa.idade,
       email: pessoa.email,
       endereco: pessoa.endereco
   }
   pessoaAnonima = {
       ...pessoa,
       nome: 'ANÔNIMO'
   }
   return pessoaAnonima
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


// https://github.com/future4code/vaughan-Ana-Sammi/pull/17
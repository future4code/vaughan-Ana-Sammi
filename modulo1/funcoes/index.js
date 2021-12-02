//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

/* EXERCÍCIO 1
    a. 10
       50
    b. Não apareceria nada, pois a função foi chamada, mas não tem o console.log para 
    imprimi-la no console. 

    EXERCÍCIO 2
    a. Essa função irá pegar uma frase inserida pelo usuário, deixará toda em letras minúsculas
    e verificará se há a palavra 'cenoura' em seguida.

    b. i. true
       ii. true
       iii. false   // (cenouras)

    */

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1
// a.

// function imprimirBio() {
//     console.log(`Eu sou Ana, tenho 34 anos, moro em Londrina e sou estudante.`)
// }
// imprimirBio()

// b.
//  function imprimirFrase(nome, idade, cidade, profissao) {
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
// }
// nome = prompt('Digite seu nome')
// idade = prompt('Quantos anos você tem?')
// cidade = prompt('Em qual cidade você mora?')
// profissao = prompt('Qual a sua profissão?')

// imprimirFrase(nome, idade, cidade, profissao)

// EXERCÍCIO 2
// a.
//  function somar(num1, num2) {
//      return num1 + num2;
// }
// console.log(somar(1, 7)) 

// b. 
// function verificar(numero1, numero2) {
//     return numero1 >= numero2
// }
//  console.log(verificar(numero1, numero2)) 

// c.
// function ehPar(numero) {
//      return numero % 2 === 0;
//  }
// numero = prompt('Digite um número para saber se ele é par');
// console.log(ehPar(numero))

// d.
// function formatar(frase) {
//   return frase.toUpperCase()
// }

// frase = prompt('Digite uma frase')
// console.log(frase.length, formatar(frase))

// EXERCÍCIO 3

//  function somatoria(primeiroNumero, segundoNumero) {
//      console.log(primeiroNumero + segundoNumero);
//  } 

//  function diferenca(primeiroNumero, segundoNumero) {
//     return primeiroNumero - segundoNumero;
//  }

//  function multiplicacao(primeiroNumero, segundoNumero){
//      return primeiroNumero * segundoNumero;
//  }

// function divisao(primeiroNumero, segundoNumero){
//      return primeiroNumero / segundoNumero; 
//  } 

// primeiroNumero = Number(prompt('Digite um número'));
// segundoNumero = Number(prompt('Digite outro número'));

// console.log(`Números digitados: ${primeiroNumero} e ${segundoNumero}`)
// console.log(`Soma: ${somatoria(primeiroNumero, segundoNumero)}`);
// console.log(`Diferença: ${diferenca(primeiroNumero, segundoNumero)}`);
// console.log(`Multiplicação: ${multiplicacao(primeiroNumero, segundoNumero)}`);
// console.log(`Divisão: ${divisao(primeiroNumero, segundoNumero)}`);


// DESAFIO 1
// a.
// const funcaoFlecha = nome => {
//      console.log(nome)
//  }
 

// // b.
// const outraFuncao = (valor1, valor2) => {
//  const soma = valor1 + valor2;
//  funcaoFlecha(soma)
// }
// outraFuncao(2, 3)


// DESAFIO 2

function calcularHipotenusa(cateto1, cateto2) {
    return Math.sqrt((Math.pow(cateto1, 2) + (Math.pow(cateto2, 2)))) //será que tem um jeito de usar menos parênteses?
}    

console.log(calcularHipotenusa(3, 4))





/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

1. a. undefined
   b. null
   c. 11
   d. 3
   e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]]
   f. 9

2. SUBI NUM ÔNIBUS EM MIRROCOS, 27 
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// Exercício 1

// let nomeUsuario = prompt("Digite seu nome");
// let emailDoUsuario = prompt("Digite seu e-mail");
// console.log(`O e-mail ${emailDoUsuario.trim()} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}`);

// Exercício 2

// let comidasFav = ['macarrão', 'sushi', 'pizza', 'batata frita', 'manga'];
// console.log(comidasFav);
// console.log('Essas são as minhas comidas preferidas:')
// console.log(comidasFav[0]);
// console.log(comidasFav[1]);
// console.log(comidasFav[2]);
// console.log(comidasFav[3]);
// console.log(comidasFav[4]);

// comidasFav[1] = prompt("Digite sua comida preferida");
// console.log('Nova lista:');
// console.log(comidasFav[0]);
// console.log(comidasFav[1]);
// console.log(comidasFav[2]);
// console.log(comidasFav[3]);
// console.log(comidasFav[4]);

// EXERCÍCIO 3

let listaDeTarefas = [];
let tarefa1 = prompt("Digite uma tarefa que você precise realizar hoje");
let tarefa2 = prompt("Insira mais uma tarefa");
let tarefa3 = prompt("Última tarefa. Prometo!");
listaDeTarefas.push(tarefa1, tarefa2, tarefa3);
console.log(listaDeTarefas);
let indice = prompt("Digite um número de 1 a 3 para a tarefa que você já realizou");
listaDeTarefas.splice(indice - 1, 1);
console.log(listaDeTarefas);


// DESAFIO 1

// let frase = prompt('Digite uma frase curta')
// frase = frase.trim();
// console.log(frase)
// const lista = frase.split(" ");
// console.log('agora é lista', lista);

// DESAFIO 2

let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
let abacaxi = frutas.indexOf('Abacaxi');
console.log(abacaxi, frutas.length);
console.log(abacaxi + 1, frutas.length); //não sei se vcs queriam o índice a partir do 0 ou do 1, fiz os dois kkkk


// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1.
// O código está adicionando o valor de i à variável valor, até que i seja menor que 5.
// O resultado impresso será 10.


//2.
//a. Será impresso no console:
// 19
// 21
// 23
// 25
// 27

//b. Sim. Para acessar o índice de cada elemento poderíamos fazer:
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (lista.length - 1 < lista.length) {
// 		console.log(numero)
// 	}
// }


//3.
// *
// **
// ***
// ****

//------------------------------------

//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1.
// let numeroBichos = Number(prompt('Quantos bichinhos de estimação você tem?'));
// let quantidadeBichos = 0;
// let listaNomes = [];
// if (numeroBichos === 0) {
// 	console.log('Que pena! Você pode adotar um pet!')
// } else {
// 	while (quantidadeBichos < numeroBichos) {
// 		let nomesBichos = prompt('Qual é o nome do seu bichinho?')
// 		listaNomes.push(nomesBichos)
// 		quantidadeBichos++
		
// 	}
// 	console.log(listaNomes)
// }


//2.
let arrayOriginal = [38, 2, 5, 55, 9, 10, 34, 1];

// //a.
// for (i = 0; i < arrayOriginal.length; i++) {
// 	console.log(arrayOriginal[i])
// }

// //b.
// let novoArray = [];
// for (n = 0; n < arrayOriginal.length; n++) {
// 	arrayOriginal[n] = arrayOriginal[n] / 10;
// 	novoArray.push(arrayOriginal[n])
// }
// console.log(novoArray)

//c.
// let arrayPares = [];
// for (i = 0; i < arrayOriginal.length; i++) {
// 	if (arrayOriginal[i] % 2 === 0) {
// 		arrayPares.push(arrayOriginal[i])
// 	} 
// }
// console.log(arrayPares);

//d.
// let arrayDeStrings = [];
// for (i = 0; i < arrayOriginal.length; i++) {
// 	arrayDeStrings[i] = `O elemento do índex ${i + 1} é: ${arrayOriginal[i]}`
// }
// console.log(arrayDeStrings);

//e.

// function mostrarMaiorNumero (numeros) {
// 	let maiorNumero = 0;
// 	for (i = 0; i < numeros.length; i++) {
// 		if (maiorNumero < numeros[i]) {
// 			maiorNumero = numeros[i]
// 		}
//     } return maiorNumero
// }
// console.log("O maior número é:", mostrarMaiorNumero(arrayOriginal))

// function mostrarMenorNumero (numeros) {
// 	let menorNumero = arrayOriginal[0]
// 	for (i = 0; i < numeros.length; i++) {
// 		if (numeros[i] < menorNumero) {
// 			menorNumero = numeros[i]
// 		}
// 	} return menorNumero
// }
// console.log("O menor número é:", mostrarMenorNumero(arrayOriginal))


// DESAFIOS 

//1.
let numeroPensado = Number(prompt("Escolha um número"));
	console.log('Vamos Jogar!')
let chute = Number(prompt('Tente acertar o número escolhido'))
console.log(`O número chutado foi: ${chute}`); 
if (chute !== numeroPensado) {
	if (chute < numeroPensado) {
		console.log("Errrroou! O número escolhido é maior.")
	novaTentativa = Number(prompt('Tente de novo'))
} else if (chute > numeroPensado) {
	console.log("Errrroou! O número escolhido é menor.")
	novaTentativa = Number(prompt('Tente de novo'))
} else {
	console.log('Acertou!')
	
	} 
}


/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert("Boas vindas ao jogo de Blackjack!")

let usuario = [];
let computador = [];


if (confirm("Deseja iniciar um novo jogo?")){
   while (usuario.length <= 2) {
      usuario.push(comprarCarta());
   }
   while (computador.length < 3) {
      computador.push(comprarCarta())
   }
} else {
   console.log('O jogo acabou')
} 

const cartasUsuario = `${usuario[0].texto} ${usuario[1].texto}`
const cartasComputador = `${computador[0].texto} ${computador[1].texto}`
const totalUsuario = usuario[0].valor + usuario[1].valor
const totalComputador = computador[0].valor + computador[1].valor

console.log(`Usuário: ${cartasUsuario} - pontuação: ${totalUsuario}`);
console.log(`Computador: ${cartasComputador} - pontuação: ${totalComputador} `)

if (totalUsuario > totalComputador) {
   console.log("O usuário ganhou! :)")
} else if (totalUsuario < totalComputador) {
   console.log("O computador ganhou :(")
} else {
console.log("Empate!")
}

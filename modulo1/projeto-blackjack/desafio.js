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
let resultado
const inicioDoJogo = confirm("Deseja iniciar uma nova partida?")
   if (inicioDoJogo === true) {
         while (usuario.length <= 2) {
            usuario.push(comprarCarta());
            // if (cartasUsuario.valor === 22) {
            //    while (usuario.length !== 0) {
            //       usuario.pop()               
            //    } while (usuario.length <= 2) {
            //       usuario.push(comprarCarta()) 
            // }
            // }
            } 
            while (computador.length <= 2) {
               computador.push(comprarCarta());
               // if (cartasComputador.valor === 22) {
               //    while (computador.length !== 0) {
               //       computador.pop()
               //    } while (computador.length <= 2) {
               //       computador.push(comprarCarta()) 
               //    }
               // }     
            }
       } else {
       console.log('O jogo acabou')
    } 
    
const cartasUsuario = `${usuario[0].texto} ${usuario[1].texto}`
const cartasComputador = `${computador[0].texto} ${computador[1].texto}`
const totalComputador = computador[0].valor + computador[1].valor

if (cartasUsuario.valor === "11, 11") {
   while (usuario.length !== 0) {
      usuario.pop()               
   } while (usuario.length <= 2) {
      usuario.push(comprarCarta()) 
   }
}

if (cartasComputador.valor === "11, 11") {
   while (computador.length !== 0) {
      computador.pop()
   } while (computador.length <= 2) {
      computador.push(comprarCarta()) 
   }
}

let primeirasCartas = confirm(`Suas cartas são ${usuario[0].texto} e ${usuario[1].texto}. A carta revelada do computador é ${computador[0].texto}.
Deseja comprar mais uma carta?`)
let cartasDaMao = cartasUsuario
let totalUsuario = usuario[0].valor + usuario[1].valor
let resultado = ""

// let novasCartas = confirm(`Suas cartas são ${cartasDaMao}. A carta revelada do computador é ${computador[0].texto}.
// Deseja comprar mais uma carta?`)

if (primeirasCartas === true) {
   usuario.push(comprarCarta())
   cartasDaMao = cartasDaMao + usuario[usuario.length - 1].texto
   totalUsuario = totalUsuario + usuario[usuario.length - 1].valor
   
   let novasCartas = confirm(`Suas cartas agora são ${cartasDaMao}. A carta revelada do computador é ${computador[0].texto}.
   Deseja comprar mais uma carta?`)
     while (novasCartas === true) {
      usuario.push(comprarCarta())
      cartasDaMao = cartasDaMao + usuario[usuario.length - 1].texto
      totalUsuario = totalUsuario + usuario[usuario.length - 1].valor
      }
     
} 
switch(resultado){
   case totalUsuario > totalComputador:
       resultado = `O usuário ganhou :)`
       break
   case totalUsuario < totalComputador:
      resultado = 'O computador ganhou :('
      break;
   case totalUsuario === totalComputador:
      resultado = 'Empate!'} 

if (primeirasCartas === false || novasCartas === false) {
   alert(`Suas cartas são ${cartasDaMao}. Sua pontuação é ${totalUsuario}.
   As cartas do computador são ${cartasComputador}. A pontuação do computador é ${totalComputador}.
   ${resultado}`)
}







 

// console.log(`Usuário: ${cartasUsuario} - pontuação: ${totalUsuario}`);





    

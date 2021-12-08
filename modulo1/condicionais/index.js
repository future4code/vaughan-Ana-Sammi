/* 
EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

EXERCÍCIO 1
    a. O código testa se um número inserido pelo usuário é par ou ímpar.
    b. Números pares.
    c. Números ímpares.


EXERCÍCIO 2
    a. O código serve para mostrar o preço da fruta escolhida.
    b. O preço da fruta Maçã é R$ 2.25
    c. O preço da fruta Pêra é R$ 5.5


EXERCÍCIO 3
    a. A primeira linha está pedindo que o usuário digite um número e está transformando a string em um numeral.
    b. Número 10: Esse número passou no teste; 
       Número -10: (nada)
    c. Sim, pois a variável mensagem está definida dentro do escopo filho (condicional if) e está sendo requisitada no escopo pai.
    Provavelmente a mensagem de erro será algo como: 'A variável "mensagem" não foi definida.'
*/



// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1

// const idadeUsuario = Number(prompt('Digite a sua idade:'));

// if (idadeUsuario >= 18) {
//     console.log('Você pode dirigir.')
// } else {
//     console.log('Você não pode dirigir.')
// }


// EXERCÍCIO 2

// let turno = prompt('Em qual turno você estuda? Digite M para matutino, V para verspertino ou N para noturno').toUpperCase();

// if (turno === 'M') {
//     console.log('Bom Dia!')
// } else if (turno === 'V') {
//     console.log('Boa Tarde!')
// } else {
//     console.log('Boa Noite!')
// }


// EXERCÍCIO 3
// let turno = prompt('Em qual turno você estuda? Digite M para matutino, V para verspertino ou N para noturno').toUpperCase();

// switch(turno) {
//     case 'M':
//         console.log('Bom Dia!')
//     break;
//     case 'V':
//         console.log('Boa Tarde!')
//     break;
//     case 'N':
//         console.log('Boa Noite!')
//     break;
//     default:
//         console.log('Você digitou algo errado! Tente novamente.')
// }


// EXERCÍCIO 4

// let generoDoFilme = prompt('Qual é o gênero do filme que vocês vão assistir?').toUpperCase().trim();
// let valorIngresso = Number(prompt('Quanto custa o ingresso?'));

// if (generoDoFilme === 'FANTASIA' && valorIngresso < 15){
//     console.log("Bom Filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }



// DESAFIOS

// DESAFIO 1
// let generoDoFilme = prompt('Qual é o gênero do filme que vocês vão assistir?').toUpperCase().trim();
// let valorIngresso = Number(prompt('Quanto custa o ingresso?'));

// if (generoDoFilme === 'FANTASIA' && valorIngresso < 15) {
//     const lanchinho = prompt('Qual lanchinho você vai comprar?')
//     console.log(`Bom filme e aproveite seu/sua ${lanchinho}!`)
// } else {
//     console.log("Escolha outro filme :(")
// }


// DESAFIO 2

console.log('---Dados da compra---')

const nomeCompleto = prompt('Digite seu nome completo') 
    console.log(`Nome do cliente: ${nomeCompleto}`)


const tipo = prompt('Qual é o tipo de jogo? Digite IN para jogo internacional ou DO para jogo doméstico').toUpperCase()
    if (tipo === 'IN'){
        console.log(`Tipo de jogo: Internacional`)
    } else {
        (console.log(`Tipo de jogo: Nacional`));
    } 


const etapa = prompt('Qual é a etapa do jogo? Digite SF para semi-final, DT para decisão de terceiro lugar ou FI para final').toUpperCase()
    switch(etapa) {
        case 'SF':
            console.log('Etapa do Jogo: Semi-Final')
        break;
        case 'DT':
            console.log('Etapa do Jogo: Decisão de Terceiro Lugar')
        break;
        case 'FI':
            console.log('Etapa do Jogo: Final')
        break;
    }

const categoria = Number(prompt('Qual é a categoria do jogo? Opções: 1, 2, 3 ou 4'))
    console.log(`Categoria: ${categoria}`)

const numeroDeIngressos = Number(prompt('Digite a quantidade de ingressos que deseja comprar'));
console.log(`Quantidade de ingressos: ${numeroDeIngressos}`)

console.log('---Valores---')

if (tipo === 'DO') {
    if (etapa === 'SF') {
    const listaDO_SF = [1320, 880, 550, 220];
    const valorTotal = listaDO_SF[categoria-1]
    console.log('Valor do ingresso: ' + valorTotal)
    } else if (etapa === 'DT') {
    const listaDO_DT = [660, 440, 330, 170]
    valorTotal = listaDO_DT[categoria-1]
    console.log('Valor do ingresso: ' + valorTotal)
    } else if (etapa === 'FI') {
        const listaDO_FI = [1980, 1320, 880, 330];
        valorTotal = listaDO_FI[categoria-1]
    console.log('Valor do ingresso: ' + valorTotal)
    }
} else {
    if (etapa === 'SF') {
        const listaIN_SF = [1320, 880, 550, 220];
            valorTotal = listaIN_SF[categoria-1] / 4.1
            console.log('Valor do ingresso: ' + valorTotal)
        } else if (etapa === 'DT') {
        const listaIN_DT = [660, 440, 330, 170]
            valorTotal = listaIN_DT[categoria-1] / 4.1
            console.log('Valor do ingresso: ' + valorTotal)
        } else if (etapa === 'FI') {
        const listaIN_FI = [1980, 1320, 880, 330];
            valorTotal = listaIN_FI[categoria-1] / 4.1
            console.log('Valor do ingresso: ' + valorTotal)
        }
}

console.log(`Valor total: ` + valorTotal*numeroDeIngressos)

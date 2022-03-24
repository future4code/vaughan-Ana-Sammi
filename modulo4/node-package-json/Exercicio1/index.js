// Exercício 1a
// Utilizando process.argv[index do argumento], sendo os index 0 e 1 fixos do Node.

//Exercício 1b

const nome = process.argv[2];
const idade = process.argv[3];

// console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

// Exercício 1c

const idadeFutura = Number(process.argv[3]) + 7;
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeFutura} anos.`)


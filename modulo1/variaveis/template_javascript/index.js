/* Exercícios de interpretação
1. 10
   10, 5

2. 10, 10, 10

3.  p = horasTrabalhadasPorDia
    t = valorRecebidoPorDia
    O programa informará quanto o cliente ganha por hora. */
    

// Exercícios de escrita de código 

// Exercício 1

let nome;
let idade;
console.log(typeof nome, typeof idade);
// o tipo impresso foi undefined, pois não há valor declarado nas variáveis
nome = prompt("Qual é o seu nome?");
idade = prompt("Qual é a sua idade?");
console.log(typeof nome, typeof idade);
/* agora as variáveis são do tipo string, já que o valor declarado foi inserido pelo usuário
   o comando prompt sempre retorna uma string */
console.log("Olá,", nome, "você tem", idade, "anos.")


// Exercício 2

let pergunta1 = "Você está usando roupa azul hoje?";
let pergunta2 = "Você está feliz hoje?";
let pergunta3 = "Você já tomou seu remédio hoje?";
let resposta1 = "Não";
let resposta2 = "Sim";
let resposta3 = "Sim";
console.log(pergunta1, "-", resposta1);
console.log(pergunta2, "-", resposta2);
console.log(pergunta3, "-", resposta3);

// Esxercício 3

let a = 11;
let b = 26;
console.log(a, b);
let c = a;
a = b;
b = c;
console.log("O novo valor de a é", a); 
console.log("O novo valor de b é", b);

// Desafio

let numero1 = prompt("Digite um número: ");
let numero2 = prompt("Digite outro número: ");
let x = Number(numero1) + Number(numero2);
console.log(x);
let y = Number(numero1) * Number(numero2);
console.log(y);
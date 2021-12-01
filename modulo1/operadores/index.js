/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

EXERCÍCIO 1
a. false
b. false
c. false
d. boolean

EXERCÍCIO 2
O problema é que o comando prompt retorna strings, então a soma será uma concatenação de strings.
O console vai imprimir primeiroNumerosegundoNumero
Exemplo: primeiroNumero = 3;
         segundoNumero = 5;
         A soma será "35" ao invés de 8.

EXERCÍCIO 3
A solução que eu daria seria transformar as strings em numeral antes de somar.

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma);*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//EXERCÍCIO 1
let idadeUsuario = Number(prompt("Digite a sua idade:"));
let idadeAmigo = Number(prompt("Digite a idade de seu melhor amigo ou amiga:"));
console.log("Sua idade é maior do que a do seu melhor amigo? ", (idadeUsuario > idadeAmigo));
console.log("A diferença de idade entre vocês é: ", idadeUsuario - idadeAmigo);

// EXERCÍCIO 2
let numeroPar = Number(prompt("Digite um número par:"));
console.log(numeroPar % 2);
todo número par inserido dá como resto 0.
se um número ímpar for inserido o resto será 1.

//EXERCÍCIO 3
let idadeAnos = Number(prompt("Qual é a sua idade?"));
console.log("Sua idade em meses é: ", idadeAnos * 12, "meses!");
console.log("Sua idade em dias é: ", idadeAnos * 365, "dias!");
console.log("Sua idade em horas é: ", idadeAnos * 8766, "horas!");

// EXERCÍCIO 4
let numero1 = Number(prompt("Insira um número"));
let numero2 = Number(prompt("Insira outro número"));
console.log("O primeiro numero é maior que segundo? ", numero1 > numero2);
console.log("O primeiro numero é igual ao segundo? ", numero1 === numero2);
console.log("O primeiro numero é divisível pelo segundo?", numero1 % numero2 === 0);
console.log("O segundo numero é divisível pelo primeiro?", numero2 % numero1 === 0);

// DESAFIOS

// DESAFIO 1
let temp1 = (77 - 32) * (5 / 9) + 273.15;
console.log("77° Fahrenheit equivale a ", temp1, "Kelvin");
let temp2 = (80) * (9 / 5) + 32;
console.log("80° Celsius equvale a ", temp2 + "° Fahrenheit");
let celsius = Number(prompt("Digite quantos graus Celsius você deseja converter"));
let fahrenheit = celsius*(9/5) + 32;
let kelvin = (fahrenheit - 32) * (5/9) + 273.15
console.log(celsius + "° Celsius equivale a " + fahrenheit + "° Fahrenheit ou " + kelvin + " Kelvin");

// DESAFIO 2
const kWh = 0.05;
let quantidadeEnergia = Number(prompt("Insira a quantidade de quilowatts consumida em sua residência:"));
console.log("O valor a ser pago é de:", quantidadeEnergia * kWh);
let desconto = 0.85
console.log("O valor com desconto de 15% é", quantidadeEnergia * kWh * desconto);

// DESAFIO 3
let libras = 20 / 2.205;
console.log("20lb equivalem a", libras, "kg");
let onca = 10.5 / 35.274;
console.log("10.5oz equivalem a", onca, "kg");
let milha = 100 * 1609;
console.log("100mi equivalem a", milha, "m");
let peh = 50 / 3.281;
console.log("50ft equivalem a", peh, "m");
let galao = 103.56 * 3.79;
console.log("103.56gal equivalem a", galao, "l");
let xicara = 450 * 0.24;
console.log("450 xic equivalem a", xicara, "l");
let quantasLibras = Number(prompt("Digite a quantidade libras que deseja converter:"));
const quilos = quantasLibras / 2.205;
console.log("Resultado:", quantasLibras, "libras equivalem a", quilos, "kg");







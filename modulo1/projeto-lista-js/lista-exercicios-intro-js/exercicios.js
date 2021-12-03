// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  altura = prompt('Digite a altura');
  largura = prompt('Digite a largura')
  console.log(Number(altura) * Number(largura))
  
}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  // implemente sua lógica aqui
  anoAtual = prompt('Digite o ano atual');
  anoNascimento = prompt('Digite o ano do seu nascimento')
  console.log(Number(anoAtual) - Number(anoNascimento))
  
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome = prompt('Digite seu nome').trim();
  idade = prompt('Digite a sua idade');
  email = prompt('Digite seu e-mail').trim()
  const frase = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(frase)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  // implemente sua lógica aqui
  cor1 = prompt('Digite sua cor favorita');
  cor2 = prompt('Digite outra cor favorita');
  cor3 = prompt('Digite mais uma cor favorita');
  novaArray = [cor1, cor2, cor3];
  console.log(novaArray)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const numeroDeIngressos = custo / valorIngresso
return numeroDeIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  ultimoElemento = array.pop()
  array.push(array[0])
  array.splice(0,1)
  array.unshift(ultimoElemento)

 return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG(anoAgora, anoNasceu, anoRG) {
  // implemente sua lógica aqui
anoAgora = prompt('Digite o ano atual');
anoNasceu = prompt('Digite o ano do seu nascimento')
anoRG = prompt('Digite o ano em que sua carteira de identidade foi emitida')
const idade = anoAgora - anoNasceu;
const validade = anoAgora - anoRG;
  if  ((idade <= 20 && validade >= 5) || 
    (idade > 20, idade <= 50 && validade >= 10) || 
    (idade > 50 && validade > 15)) {
    console.log(true)
  }
  else {console.log(false)}
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
if (ano % 400 === 0)  {
  return true
}
else if (ano % 4 === 0 && ano % 100 !== 0) {
  return true
}
else { return false
}
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu(idade, escolaridade, horario) {
  // implemente sua lógica aqui
idade = prompt('Você tem mais de 18 anos?').toLowerCase().trim();
escolaridade = prompt('Você possui ensino médio completo?').toLowerCase().trim();
horario = prompt('Você possui disponibilidade exclusiva durante os horários do curso?').toLowerCase().trim();

if ((idade === 'sim') && (escolaridade === 'sim') && (horario === 'sim')) {
  console.log(true)
} else {
  console.log(false)
}
}
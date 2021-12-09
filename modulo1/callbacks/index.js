//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//1. Vai ser impresso no console cada objeto, o index de cada objeto e um array igual à array 'usuarios'.

//2. Vai ser impresso um novo array contendo apenas 2 objetos: { nome: "Amanda Rangel", apelido: "Mandi" } e
//  { nome: "Laís Petra", apelido: "Laura" }

//-------------------------------------------------------

//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ];

// a.
 const nomesPets = pets.map((nomeDoPet) => {
     return nomeDoPet.nome
 })
 console.log(nomesPets)

 //b.
 const salsichas = pets.filter((cachorrosSalsichas) => {
     if (cachorrosSalsichas.raca === "Salsicha") {
          return true
 }
 })
 console.log(salsichas)

//c.
const poodles = pets
.filter((cachorrosPoodle) => 
    cachorrosPoodle.raca === "Poodle")
.map((poodle) => `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome}`) 
console.log(poodles)

//-------------------------------------------------------------

// EXERCÍCIO 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//a.
// const nomesDosItens = produtos.map((produto) => {
//     return produto.nome
// })
// console.log(nomesDosItens)

//b.
const objetos = produtos.map((item) => {
    const novoObjeto = {nome: item.nome, preco: (item.preco * 0.95).toFixed(2)}
    return novoObjeto   
})
console.log(objetos)

//c.
const bebidas = produtos.filter((bebidas) => {
    if (bebidas.categoria === "Bebidas") {
        return true
    }
  })
console.log(bebidas)

//d.
const nomeComYpe = produtos.filter((ype) => {
    if (ype.nome.indexOf('Ypê') !== -1) {
        return true
    }
  })
console.log(nomeComYpe)

//e.
const mensagem = nomeComYpe.map((produtoYpe) => {
    return `Compre ${produtoYpe.nome} por R$${produtoYpe.preco}0`
})
console.log(mensagem)


//DESAFIOS

//1.

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

//a.
const nomesPokemons = pokemons.map((pokemon) => {
    return pokemon.nome
})
nomesPokemons.sort()
console.log(nomesPokemons)

//b.
const tiposPokemon = pokemons.map((pokemon) => {
    return pokemon.tipo
})
console.log(tiposPokemon)

const tiposSemRepeticao = tiposPokemon.filter((indice, i) => 
    tiposPokemon.indexOf(indice) === i)
console.log(tiposSemRepeticao)


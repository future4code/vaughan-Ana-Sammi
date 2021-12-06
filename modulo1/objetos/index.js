/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

EXERCÍCIO 1
    a.
    Matheus Nachtergaele
    Virginia Cavendish
    {canal: "Canal Brasil", horario: "19h"}


EXERCÍCIO 2
    a.
    {nome: "Juca", idade: 3, raca: "SRD"}
    {nome: "Juba", idade: 3, raca: "SRD"}
    {nome: "Jubo", idade: 3, raca: "SRD"}

    b. Copia o objeto cujo nome é inserido logo após os 3 pontos.


EXERCÍCIO 3
    a.
    false
    undefined

    b. A variável 'altura' não foi definida anteriormente, por isso foi impresso 'undefined'.
*/



// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1
// a.
const pessoa = {
    nome: 'Ana',
    apelidos: ['Aninha', 'Sue', 'Linda'] 
   }

function nomeEApelido(pessoa) {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
}

nomeEApelido(pessoa);

// b.
const novaPessoa = {
    ...pessoa,
    apelidos: ['Ana Banana', 'Ana Cabana', 'Ana Bacana'],

}
nomeEApelido(novaPessoa);


// EXERCÍCIO 2
//a.
const usuario = {
    nome: 'Tiago',
    idade: 32,
    profissao: 'matemático'
}

const usuario2 = {
    nome: 'Letícia',
    idade: 15,
    profissao: 'estudante'
}

//b.
function dadosUsuario(usuario) {
    console.log([usuario.nome, usuario.nome.length, usuario.idade, usuario.profissao, usuario.profissao.length]);
}

dadosUsuario(usuario);
dadosUsuario(usuario2);


//EXERCÍCIO 3
//a.
let carrinho = [];

//b.
const fruta1 = {
    nome: 'Banana',
    disponibilidade: true,
}
const fruta2 = {
    ...fruta1,
    nome: 'Maçã'
}
const fruta3 = {
    ...fruta1,
    nome: 'Pêssego'
}

//c.
function colocarNoCarrinho(fruta) {
    carrinho.push(fruta)
}
colocarNoCarrinho(fruta1);
colocarNoCarrinho(fruta2);
colocarNoCarrinho(fruta3);

//d.
console.log(carrinho);






//DESAFIOS

//DESAFIO 1
// function pegaDadosDoUsuario() {
//         nome = prompt('Qual é o seu nome?');
//         idade = prompt('Quantos anos você tem?');
//         profissao = prompt('Qual é a sua profissão?');
//    console.log({
//         nome,
//         idade,
//         profissao,  
//     })
// }
// pegaDadosDoUsuario()


//DESAFIO 2
function inserirFilmes(ano, nome) {
    filme1 = {
        ano: 1999,
        nome: 'Beleza Americana',
    }
    filme2 = {
        ano: 1999,
        nome: 'Matrix'
    }
    const antes = filme1.ano < filme2.ano
    const mesmoAno = filme1.ano == filme2.ano
    return (`O primeiro filme foi lançado antes do segundo? ${antes}
O primeiro filme foi lançado no mesmo ano do segundo? ${mesmoAno}`)
}
console.log(inserirFilmes());


// DESAFIO 3
function controlarEstoque(fruta) {
    fruta.disponibilidade = !fruta.disponibilidade
}
controlarEstoque(fruta1);
controlarEstoque(fruta2);
controlarEstoque(fruta3);
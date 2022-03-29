const minhaString: string = "3"

const meuNumero: number | string = "10"

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum Cores {
    AMARELO = "Amarelo",
    LARANJA = "Laranja",
    VERMELHO = "Vermelho",
    ROXO = "Roxo",
    ANIL = "Anil",
    AZUL = "Azul",
    VERDE = "Verde"
}

const ana: Pessoa = {
    nome: "ana",
    idade: 20,
    corFavorita: Cores.AZUL
}

const tiago: Pessoa = {
    nome: "tiago",
    idade: 78,
    corFavorita: Cores.ROXO
}

const bartolomeu: Pessoa = {
    nome: "bartolomeu",
    idade: 1,
    corFavorita: Cores.VERMELHO
}



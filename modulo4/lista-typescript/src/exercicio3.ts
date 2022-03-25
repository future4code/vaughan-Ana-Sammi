export enum GENERO {
    ACAO="ação",
    DRAMA="drama",
    COMEDIA="comédia",
    ROMANCE="romance",
    TERROR="terror"
}

export const organizaFilmes = (nome: string, anoLancamento: number, genero: GENERO, pontuacao? : number)
: {nome: string, anoLancamento: number, genero: GENERO, pontuacao? : number} => {
    
         return { nome, anoLancamento, genero, pontuacao }
    
    
}



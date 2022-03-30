export enum GENERO {
    ACAO="ação",
    DRAMA="drama",
    COMEDIA="comédia",
    ROMANCE="romance",
    TERROR="terror"
}

type Filme = {nome: string, anoLancamento: number, genero: GENERO, pontuacao? : number | null}

export const organizaFilmes = (nome: string, anoLancamento: number, genero: GENERO, pontuacao? : number | null)
: Filme => {
        const filme: Filme = {
            nome, 
            anoLancamento, 
            genero, 
            pontuacao
        }
         return filme

}



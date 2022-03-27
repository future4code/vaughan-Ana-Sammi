export const anagrama = (palavra: string): number => {
    let quantidade: number = palavra.length
    let fatorial:number = 1
    for (let i = 1; i<=quantidade; i++){
        fatorial *= i
    }
    // const fatorial = (n: number): number => n <= 1? 1 : n * fatorial(n-1);

    return fatorial
}






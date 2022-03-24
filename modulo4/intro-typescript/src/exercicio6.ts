export const operacoes = (num1: number, num2: number): string => {
    
    let soma: number = num1 + num2;
    let sub: number = num1 - num2;
    let mult: number = num1 * num2;
    let maiorResultado: number = Math.max(soma, sub, mult)
    let maiorParametros: number = Math.max(num1, num2)
    return (`Soma: ${soma}
        Subtração: ${sub}
        Multiplicação: ${mult}
        Fiquei em dúvida se vcs pediram o maior número entre os resultados ou entre os parâmetros, então:
        Maior resultado: ${maiorResultado}
        Maior número entre os dois recebidos como parâmetros: ${maiorParametros}
        `)   
}

console.log(operacoes(4, 15))
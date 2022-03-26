let dataNascimento = process.argv[2];
let dataEmissao = process.argv[3];

export const checaRenovacao = (dataNascimento: string, dataEmissao: string): boolean => {
    let anoAtual:number = new Date().getTime();
    let anoNascimento:number = new Date(dataNascimento).getTime();
    let anoEmissao:number = new Date(dataEmissao).getTime();
    let idadePessoa: number = anoAtual-anoNascimento;
    let idadeRg: number = anoAtual - anoEmissao;

    if (idadePessoa <= 630720000000 && idadeRg >= 157680000000) {
        return true
    } else if (idadePessoa > 630720000000 && idadePessoa <= 1576800000000 && idadeRg >= 315360000000) {
        return true
    } else if (idadePessoa > 1576800000000 && idadeRg > 473040000000) {
        return true
    } else {
        return false
    }
}
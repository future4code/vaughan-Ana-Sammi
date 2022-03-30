let dataNascimento = process.argv[2];
let dataEmissao = process.argv[3];

export const checaRenovacao = (dataNascimento: string, dataEmissao: string): boolean => {
    let anoAtual:number = new Date().getTime();

    const pegarAno = (data: string): string => {
        let ano = data.split("/")
        return `${ano[1]}/${ano[0]}/${ano[2]}`
    };

    let anoNascimento: number = new Date(pegarAno(dataNascimento)).getTime();
    let anoEmissao:number = new Date(pegarAno(dataEmissao)).getTime();
    let idadePessoa: number = anoAtual-anoNascimento;
    let idadeRg: number = anoAtual - anoEmissao;
    console.log(anoAtual, anoEmissao, anoNascimento, idadePessoa, idadeRg)
    let umAno:number = 31536000000

    if (idadePessoa <= 20*umAno && idadeRg >= 5*umAno) {
        return true
    } else if (idadePessoa > 20*umAno && idadePessoa <= 50*umAno && idadeRg >= 10*umAno) {
        return true
    } else if (idadePessoa > 50*umAno && idadeRg > 15*umAno) {
        return true
    } else {
        return false
    }
}
 export const retornaFrase = (nome: string, data: string): string => {
    let dataCompleta: string[] = data.split("");
    const dia: string = dataCompleta[0] + dataCompleta[1];
    let mes: string = dataCompleta[3] + dataCompleta[4];
    const ano: string = dataCompleta[6] + dataCompleta[7] + dataCompleta[8] + dataCompleta[9];

    return `Olá me chamo ${nome}, nasci no dia ${dia} do mês ${mes} do ano de ${ano}`
    
}

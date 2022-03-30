export enum SETOR {
    MKT = "marketing",
    VEN = "vendas",
    FIN = "financeiro"
}

export type Pessoa = {
    nome: string,
    salario: number,
    setor: SETOR,
    presencial: boolean
}

export const colaboradores: Pessoa[] = [
	{ nome: "Marcos", salario: 2500, setor: SETOR.MKT, presencial: true },
	{ nome: "Maria" , salario: 1500, setor: SETOR.VEN, presencial: false},
	{ nome: "Salete" , salario: 2200, setor: SETOR.FIN, presencial: true},
	{ nome: "João" , salario: 2800, setor: SETOR.MKT, presencial: false},
	{ nome: "Josué" , salario: 5500, setor: SETOR.FIN, presencial: true},
	{ nome: "Natalia" , salario: 4700, setor: SETOR.VEN, presencial: true},
	{ nome: "Paola" , salario: 3500, setor: SETOR.MKT, presencial: true }
]

export const filtraPessoas = (colaboradores: Pessoa[]): object[] => {
    const pessoasEscolhidas = colaboradores.filter((pessoa) => {
        return (pessoa.setor === SETOR.MKT && pessoa.presencial === true)
    })
    return pessoasEscolhidas
    
}
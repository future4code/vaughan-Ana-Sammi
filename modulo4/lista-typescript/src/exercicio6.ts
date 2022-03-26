type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

export const listaClientes: Cliente[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

export const pegarSaldoNegativo = (listaClientes: Cliente[]): Cliente[] => {
    return listaClientes.filter((pessoa) => {
        if (pessoa.saldoTotal - pessoa.debitos.reduce((a, b) => a+b, 0) <= 0) {
            return true
        } else return false
     }).map((pessoa) => { 
         return ( 
            {
            cliente: pessoa.cliente,
            saldoTotal: pessoa.saldoTotal - pessoa.debitos.reduce((a, b) => a+b, 0),
            debitos: []
            }
        ) 
    })
}

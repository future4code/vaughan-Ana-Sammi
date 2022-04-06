export type Expenses = {
    value: number,
    date: string,
    description: string
}

export type User = {
    name: string,
    cpf: string,
    birth: string,
    balance: number,
    transactions: Expenses[]
}

export const users: User[] = [
    {
        name: "Tiago",
        cpf: "333.444.555-66",
        birth: "26/10/1990",
        balance: 500000,
        transactions: [
            {
                value: 200,
                date: "11/03/2022",
                description: "Presente pra Ana"
            }
        ]
    },
    {
        name: "Ana",
        cpf: "444.444.444-44",
        birth: "11/03/2000",
        balance: 100000,
        transactions: [
            {
                value: 300,
                date: "26/10/2021",
                description: "Presente pro Tiago"
            },
            {
                value: 100,
                date: "01/12/2021",
                description: "Pet Shop"
            }
        ]
    }
]
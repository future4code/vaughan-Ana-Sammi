export interface Client {
    name: string
    registrationNumber: number
    consumedEnergy: number

    calculateBill(): number
}

export const client1: Client = {
    name: "Ana",
    registrationNumber: 1,
    consumedEnergy: 200,

    calculateBill: () => {
        return 2
    }
}
import { Client } from "./Client";
import { Industry } from "./Place";

export class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private industrialRegister: number,
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep)
    }

    public getIndustrialRegister(): number {
        return this.industrialRegister
    }

    public getMachinesQuantity(): number {
        return this.machinesQuantity
    }

    public calculateBill(): number {
        return (this.consumedEnergy * 0.45) + (100 * this.machinesQuantity)
    }
}
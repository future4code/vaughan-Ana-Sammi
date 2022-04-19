import { Client } from "./Client";
import { Commerce } from "./Place";

export class CommercialClient extends Commerce implements Client {
    constructor (
        private cnpj: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep)
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53
    }
    
    public getCnpj(): string {
        return this.cnpj
    }
}
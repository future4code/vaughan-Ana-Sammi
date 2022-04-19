import { Employee } from "./Employee";

export class Seller extends Employee {
    private salesQuantity: number = 0

    public setSalesQuantity(quantity: number) {
        this.salesQuantity = quantity
    }
}
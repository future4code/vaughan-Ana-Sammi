import { User } from "./User";

export class Employee extends User {
    constructor(
    protected admissionDate: string,
    protected baseSalary: number,
    email: string,
    id: string,
    name: string,
    password: string
    ) {
        super(id, email, name, password)
    }

    public getAdmissiondate(): string {
        return this.admissionDate
    }

    public getBaseSalary(): number {
        return this.baseSalary
    }

    public calculateTotalSalary(): number {
        return this.baseSalary + 400
    }
}
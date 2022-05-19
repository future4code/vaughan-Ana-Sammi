export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export class User {
    constructor(
        private name: string, 
        private email:string, 
        private password: string,
        private role: USER_ROLES,
        private id: string
        ) {}

    static toUserModel(data: any): User {
        return new User(data.id, data.name, data.email, data.password, data.role)
    }
};
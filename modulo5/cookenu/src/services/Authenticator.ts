import * as jwt from 'jsonwebtoken'
import { USER_ROLES } from '../entities/User'

export interface AuthenticationData {
    role: USER_ROLES,
    id: string
}


export class Authenticator {
    public getTokenData(token: string): AuthenticationData | null {
        try {
        const data = jwt.verify(token, process.env.JWT_KEY)
        return data as AuthenticationData
        }
        catch (e){
            return null;
        }
    };

    public generate(input: AuthenticationData): string {
        const token = jwt.sign(input, process.env.JWT_KEY, {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN});
        return token;
    };
}
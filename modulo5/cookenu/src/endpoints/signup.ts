import {Request, Response} from 'express';
import { UserDatabase } from '../data/UserDatabase';
import { IdGenerator } from '../services/idGenerator';

export async function signup(req: Request, res: Response) {
    try{
        const {name, email, password, role} = req.body

        if(!name || !email || !password || !role) {
            res.status(422).send("Preencha corretamente todas as informações")
        }

        const userDatabase = new UserDatabase();
        const user = userDatabase.findUserByEmail(email);
        if(user) {
            res.status(409).send("E-mail já cadastrado")
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generateId()

        
    }
    catch (e){
        res.status(400).send(e.message)
    }
}
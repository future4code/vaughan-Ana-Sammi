import {Request, Response} from 'express';
import { UserDatabase } from '../data/UserDatabase';
import { User } from '../entities/User';
import { Authenticator } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from '../services/idGenerator';

export async function login(req: Request, res: Response) {
    try{
        const {email, password} = req.body

        if(!email || !password) {
            res.status(422).send("Preencha corretamente todas as informações")
        };

        const userDatabase = new UserDatabase();
        const user = await userDatabase.findUserByEmail(email);
        if(!user) {
            res.status(422).send("Esse e-mail não está cadastrado")
        };

        const hashManager = new HashManager()
        const passwordIsCorrect = hashManager.compare(password, user.getPassword());
        if (!passwordIsCorrect) {
            res.status(401).send("E-mail ou senha incorretos")
        }

        const authenticator = new Authenticator
        const token = authenticator.generate({id: user.getId(), role: user.getRole()})

        res.status(201).send({message:"Usuário logado com sucesso", token})
    }

    catch (e){
        res.status(400).send(e.message)
    }
}
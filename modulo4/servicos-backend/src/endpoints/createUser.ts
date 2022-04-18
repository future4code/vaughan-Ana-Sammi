import {Request, Response} from 'express'
import { connection } from '../data/connection';
import { getAddress } from '../services/getAddress'


export const createUser = async(req: Request, res: Response) => {
    try {
        const {zipcode, number, complement} = req.body
        const address = await getAddress(zipcode)
        if(address) {
        await connection("user_address")
            .insert({
                zipcode: zipcode,
                street: address.street,
                number: number,
                complement: complement,
                district: address.district,
                city: address.city,
                state: address.state

            })
        }
        res.status(201).send("Usuário cadastrado com sucesso!")
    }
    catch(e) {
        res.send({message: "Erro"})
    }
};
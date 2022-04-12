import { connection } from "../data/connection"
import {Response, Request} from 'express'

export const getFiveUsers = async(req:Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {
        let pagina = Number(req.query.pagina) 
        let quantidadeUsers = 5
        let offset = quantidadeUsers*(pagina - 1)
        if(pagina <= 0 ){
            throw new Error("Coloque um número acima de 1")
         }
        const result = await connection("aula48_exercicio")
        .select("*")
        .limit(quantidadeUsers)
        .offset(offset)

        res.status(200).send(result)
    }
    catch(e) {
        res.status(errorCode).send(e.message)
    }
}
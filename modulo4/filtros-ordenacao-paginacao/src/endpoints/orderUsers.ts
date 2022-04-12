import { connection } from "../data/connection"
import {Response, Request} from 'express'

export const orderUsers = async(req:Request, res:Response): Promise<void> => {
    let errorCode = 400
    try {
        let ordenacao = req.query.ordenacao as string
        if(ordenacao.toUpperCase() !== 'ASC' && ordenacao.toUpperCase() !== 'DESC'){
            ordenacao = 'ASC'
         }
         if(!ordenacao) {
            let result = await connection("aula48_exercicio")
            .select("*")
            .orderBy("email", `${ordenacao}`)
            console.log("to aqui", result)
            res.status(200).send(result)
         } else if(ordenacao) {
            let result = await connection("aula48_exercicio")
            .select("*")
            .orderBy("email", `${ordenacao}`)
            res.status(200).send(result)
        }
    }
    catch(e) {
        res.status(errorCode).send(e.message)
    }
}
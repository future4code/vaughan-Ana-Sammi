import { connection } from "../data/connection"
import {Response, Request} from 'express'


export const getUsersByType = async(req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {
        const type = req.params.type as string

        if(!type) {
            errorCode = 422
            throw new Error("O parâmetro type deve ser passado")
        }
       
        const result = await connection("aula48_exercicio")
            .select('*')
            .where("type", "like", `${type}`);
            if(result.length === 0) {
                errorCode = 422
                throw new Error("Tipo não encontrado")
            }
        res.status(200).send(result)
    }
    catch(e) {
        res.status(errorCode).send(e.message)
    }
};


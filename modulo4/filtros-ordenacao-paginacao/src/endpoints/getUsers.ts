import { connection } from "../data/connection"
import {Response, Request} from 'express'

export const getUsers = async(req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {
        let search = req.query.search as string
        let order = req.query.order as string
        let page = 1 || Number(req.query.page)
        let quantityToShow = 3
        let offset = quantityToShow*(page-1)

        if(order && order.toUpperCase() !== 'ASC' && order.toUpperCase() !== 'DESC'){
            order = 'DESC'
        }

        if (search||order||page){
            let result = await connection("aula48_exercicio")
            .select("*")
            .where("name" || "type", "like", `%${search}%`)
            .orderBy("name", order)
            .limit(quantityToShow)
            .offset(offset)

            console.log(result)
            res.status(200).send(result)
        } else if(!search||!order||!page) {
            let result = await connection("aula48_exercicio")
                .select("*")
                res.status(200).send(result)
        }
        
    }
    catch(e){
        res.status(errorCode).send(e.message)
    }
}
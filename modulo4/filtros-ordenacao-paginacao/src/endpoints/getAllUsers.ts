import {connection} from '../data/connection'
import {Request, Response} from 'express'

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    let errorCode = 400
    try {
          const {busca} = req.query
          if (!busca) {
          const users = await selectAllUsers()
          if(users.length === 0){
             errorCode = 404
             throw new Error("Nenhum usuário cadastrado")
          }
          res.status(200).send(users)
       }
       if(busca) {
       const result = await connection("aula48_exercicio")
          .select("*")
          .where("name", "like", `%${busca}%`)
          res.status(200).send(result)
 
       if(result.length === 0){
          errorCode = 422
          throw new Error(`Não encontramos nenhum usuário '${busca}'`)
       }
      } 
    } 
    catch (e) {
       res.status(errorCode).send(e.message)
    }
 }
 
 export default async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT *
       FROM aula48_exercicio;
    `)
 
    return result[0]
 }
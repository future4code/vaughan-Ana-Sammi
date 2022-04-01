import express, {Express} from "express";
import cors from "cors";
import { AddressInfo } from "net";
import {users, User} from "./data"

const app: Express = express();
app.use(express.json());
app.use(cors());


app.post("/users", (req, res) => {
    let errorCode = 400
    
    try {
        const { name, cpf, birth } = req.body
        
        if (!name || !cpf || !birth) {
            errorCode = 422
            throw new Error("Verifique se todos os campos estão preenchidos")
        }

        let currentYear = new Date().getTime()
        const [day, month, year] = birth.split("/")
        const birthTime = month+"/"+day+"/"+year
        let age = Date.parse(birthTime)
       
        if (currentYear - age < 18*31536000000){
            errorCode = 422
            throw new Error("Para criar uma conta no LabeBank é necessário ter, no mínimo, 18 anos.")
        }
        
        const newUser: User = {
            name,
            cpf,
            birth,
            balance: 0,
            transactions: []
        }

        users.push(newUser)
        res.status(201).send("Cliente cadastrado com sucesso!")
    }
    
    catch (e: any){
        res.status(errorCode).send(e.message)
    }
})


app.get("/users", (req, res) => {
    let usersNames = users.map(user => user.name)
    res.status(200).send(usersNames)
})


app.get("/users/balance/:name/:cpf", (req, res) => {
    let errorCode = 400
    try {
        let name = req.params.name
        let cpf = req.params.cpf

        if(!name || !cpf) {
            errorCode = 401
            throw new Error("O nome e o CPF devem ser preenchidos")
        }

        let userData = users.find(user => user.cpf === cpf && user.name === name)
        if (userData === undefined) {
            errorCode = 422
            throw new Error("Verifique se os campos estão preenchidos corretamente")
        } else {
            let balance = userData.balance
            res.send(`O seu saldo é: R$ ${balance}`)
        }
    }
    catch (e:any) {
        res.status(errorCode).send(e.message)
    }
})

const server = app.listen(process.env.PORT || 3005, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Servidor on na porta ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
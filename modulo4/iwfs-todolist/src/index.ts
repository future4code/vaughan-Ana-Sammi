import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
// import knex from "knex";
// import dotenv from 'dotenv'

// dotenv.config()

// const connection = knex({
//     client: "mysql",
//     connection:{
//         host: process.env.DB_HOST,
//         port:3306,
//         user: process.env.DB_USER,
//         password: process.env.DB_PASS,
//         database: process.env.DB_NAME,
//         multipleStatements: true
//     }
// });

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.post("/user", async (req, res) => {
  let errorCode = 400;
  try {
    if (!req.body.nickname || !req.body.email || !req.body.name) {
      errorCode = 422;
      throw new Error("Preencha todos os campos");
    } else if (
      req.body.nickname === undefined ||
      req.body.email === undefined ||
      req.body.name === undefined
    ) {
      errorCode = 422;
      throw new Error("Verifique se os campos estão preenchidos corretamente");
    }
    await connection("Users")
      .insert({
        id: Date.now().toString(),
        name: req.body.name,
        nickname: req.body.nickname,
        email: req.body.email,
      })
      .into("Users");
    res.status(201).send("Usuário criado com sucesso!");
  } catch (e: any) {
    res.status(422).send(e.message);
  }
});

app.get("/users/:id", async (req, res) => {
  let errorCode = 400;
  try {
    const id = req.params.id as string;
    const user = await connection("Users").select("id", "name").where("id", id);
    if (user.length === 0) {
      errorCode = 422;
      throw new Error("Usuário não encontrado");
    }
    res.status(200).send(user);
  } catch (e: any) {
    res.status(errorCode).send(e.message);
  }
});

app.put("user/edit/:id", async (req, res) => {
  let errorCode = 400;
  try {
      let id = req.params.id as string;
      if(!req.body.name || !req.body.username) {
          errorCode = 422
          throw new Error("Preencha os campos corretamente")
      } else if (req.body.name === undefined || req.body.username === undefined) {
          errorCode = 422
          throw new Error("Preencha os campos corretamente")
      }
        await connection("Users")
        .update({
            name: req.body.name,
            nickname: req.body.nickname
        })
        .where("id", id);

    res.status(201).send("Usuário alterado com sucesso!");
  } catch (e: any) {
    res.status(errorCode).send(e.message);
  }
});

app.post("/task", async(req,res) => {
    let errorCode = 400
    try {
        await connection("tasks")
        .insert({
            id: Date.now().toString(),
            title: req.body.title,
            description: req.body.title,
            limit_date: req.body.limit_date,
            user_id: req.body.user_id
        })
        .into("tasks")
    }
    catch (e: any){
        res.status(errorCode).send(e.message)
    }
});


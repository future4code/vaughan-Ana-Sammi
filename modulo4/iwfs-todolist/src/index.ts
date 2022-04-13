import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection"
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

app.put("/user/edit/:id", async (req, res) => {
  let errorCode = 400;
  try {
      let id = req.params.id as string;
      if(!req.body.name || !req.body.nickname) {
          errorCode = 422
          throw new Error("Preencha todos os campos")
      } else if (req.body.name === undefined || req.body.nickname === undefined) {
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
        if (!req.body.title || !req.body.description || !req.body.limit_date || !req.body.user_id) {
            errorCode = 422
            throw new Error("Preencha todos os campos")
        }
        const date = req.body.limit_date.split("/").reverse().join("-")
        await connection("tasks")
        .insert({
            id: Date.now().toString(),
            title: req.body.title,
            description: req.body.title,
            limit_date: date,
            user_id: req.body.user_id,
            status: req.body.status
        })
        .into("tasks")
        res.status(201).send("Tarefa criada com sucesso!")
    }
    catch (e: any){
        res.status(errorCode).send(e.message)
    }
});

app.get("/task/:id", async(req, res) => {
    let errorCode = 400
    try {
        const id = req.params.id as string
        if(!id) {
          errorCode = 422
          throw new Error("Verifique se o id foi enviado")
        }
        const task = await connection ("tasks")
        .join("Users", "Users.id", "=", "tasks.user_id")
        .where("tasks.id", id)

        if(task.length === 0) {
          errorCode = 422
          throw new Error("Tarefa não encontrada")
        }
        res.status(200).send(task)
    }
    catch(e:any) {
        res.status(errorCode).send(e.message)
    }
});

app.get("/user/all", async (req, res) => {
    let errorCode = 400
    try {
        const user = await connection("Users").select("id", "nickname")
        if (user.length === 0) {
            errorCode = 400
            throw new Error("users: []")
        }
        res.status(200).send(user)
    }
    catch (e:any) {
        res.status(errorCode).send(e.message)
    }
});

app.get("/task", async(req, res) => {
    let errorCode = 400
    try {
      const id = req.query.creatorUserId as string
      if(!id) {
        errorCode = 422
        throw new Error("Verifique se o id do usuário está sendo enviado")
      } else if (id === undefined) {
        errorCode = 422
        throw new Error("Usuário não encontrado")
      }
        const task = await connection ("tasks")
        .select("tasks.*", "Users.nickname")
        .join("Users", "Users.id", "tasks.user_id")
        .where("Users.id", id)

        res.status(200).send(task)
    }
    catch(e:any) {
        res.status(errorCode).send(e.message)
    }
});

app.get("/user", async(req, res) => {
  let errorCode = 400
  try {
    let busca = req.query.busca as string
    let query = '%' + busca + '%'
    if(!busca){
      errorCode = 422
      throw new Error("Você deve enviar algo no campo de busca")
    }

    const user = await connection("Users")
    .select("Users.id", "Users.nickname")
    .where("Users.name", "LIKE", query)
    .orWhere("Users.nickname", "like", query)

    res.status(200).send(user)
  }
  catch(e:any) {
    res.status(errorCode).send(e.message)
  }
});

app.post("/task/responsible", async(req, res) => {
  let errorCode = 400
  try {
    let nickname = req.body.userNickname as string
    let id = req.body.taskId as string
    if(!nickname || !id) {
      errorCode = 422
      throw new Error("Verifique se todos os parâmetros foram enviados")
    }
    const task = await connection("tasks")
    .update({responsible_user_id: nickname})
    .where("tasks.id", "=", id )
    
    res.status(201).send("Usuário atribuído à tarefa com sucesso")
  }
  catch(e:any) {
    res.status(errorCode).send(e.message)
  }
});

app.get("/task/:id/responsible", async(req,res) => {
  let errorCode = 400
  try {
  let taskId = req.params.id as string
  if(!taskId) {
    errorCode = 422
    throw new Error("Verifique se os parâmetros foram enviados")
  }
  const users = await connection("tasks")
  .select("tasks.user_id", "tasks.responsible_user_id")
  .where({"tasks.id":taskId})

  if(users.length === 0) {
    throw new Error("Tarefa não encontrada")
  }
  res.status(200).send(users)
  }
  catch(e:any){
    res.status(errorCode).send(e.message)
  }
})


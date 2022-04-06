import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    multipleStatements: true
  }
});

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

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
      return result[0][0]
  }

const getActorsName = async(name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name="${name}"
    `)
    return result[0][0]
};

const getGender = async(gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) from Actor WHERE gender = "${gender} 
    `)
    return result[0][0].count
};

const updateActor = async(
    id: string,
    salary: number
): Promise<void> => {
    await connection("Actor")
        .update({
            salary: salary
        })
        .where("id", id)
};

const deleteActor = async(
    id: string
): Promise<void> => {
    await connection("Actor")
        .delete()
        .where("id", id);
};

const getAvgSalary = async(gender: string): Promise<void> => {
    await connection("Actor")
        .avg("salary")
        .where("gender", gender)
};

app.get("/actor/:id", async (req, res) => {
    try {
        const id = req.params.id
        const actor = await getActorById(id)
        res.status(200).send(actor)
    } catch (e:any) {
        res.status(400).send(e.message)
    }
});

app.get("/actor", async(req, res) => {
    try {
        const gender = req.query.gender as string
        const count = await getGender(gender)
        res.status(200).send(count)
    } catch(e:any) {
        res.status(400).send(e.message)
    }
});

// app.put("/actor", async(req, res) => {
//     try {
//         await updateSalary (
//             req.body.id,
//             req.body.salary
//         );
//         res.status(200).end()
//     } catch(e:any) {
//         res.status(400).send(e.message)
//     }
// });

app.delete("/actor/:id", async(req, res) => {
    try {
        await deleteActor(req.params.id)
        res.status(200).end()
    } catch(e: any) {
        res.status(400).send(e.message)
    }
});

const createMovie = async(
    id: string,
    titulo: string,
    sinopse: string,
    data_lancamento: Date,
    playing_limit_date: Date,
    avaliacao: number
): Promise<void> => {
    await connection("Filmes")
    .insert({
        id: id,
        titulo: titulo,
        sinopse: sinopse,
        data_lancamento: data_lancamento,
        playing_limit_date: playing_limit_date,
        avaliacao: avaliacao
    })
    .into("Filmes")
};

app.post("/movie", async(req, res) => {
    try {
        await createMovie(
            Date.now().toString(),
            req.body.titulo,
            req.body.sinopse,
            req.body.data_lancamento,
            req.body.playing_limit_date,
            req.body.avaliacao
        )
        res.status(201).send("Filme criado com sucesso")
    }
    catch(e:any) {
        res.status(400).send(e.message)
    }
})


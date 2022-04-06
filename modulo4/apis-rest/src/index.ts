import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { User, users } from "./data";
import { rawListeners } from "process";

const app: Express = express();

app.use(express.json());
app.use(cors());

//exercício 1 - utilizei o método GET e indiquei a entidade como "/users"
app.get("/users", (req, res) => {
  try {
    if (!users) {
      throw new Error("Não há usuários listados.");
    }
    res.status(200).send(users);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
});

//exercicio 2 
// utilizei o path params (já que no notion pedia outro endpoint). Se fosse colocar no mesmo endpoint do get all users, eu usaria um query params.
app.get("/users/searchtype/:type", (req, res) => {
    let errorCode = 400
  let type = req.params.type as string;
  try {
    if (!type) {
        errorCode = 404
      throw new Error("É necessário passar o tipo do usuário.");
    } else {
      let types = users.filter((user) => {
        return user.type === type.toUpperCase();
      });
      if (type.length >= 1) {
        res.status(202).send(types);
        //aqui embaixo utilizei o fato de não haver nada dentro do array type após o filter, caso não haja correspondência, para pegar o erro de type inválido
      } else if (type.length < 1) {
          errorCode = 422
        throw new Error("Tipo não encontrado.");
      }
    }
  } catch (e: any) {
      res.status(errorCode).send(e.message);
  }
});

//exercício 3 - aqui tbm usaria o query, mas como pedia para pedir um novo endpoint, fiz com path params
app.get("/users/searchname/:name", (req, res) => {
  let name = req.params.name as string;
  let errorCode = 400;
  try {
    if (!name) {
    errorCode = 404
      throw new Error("Insira o nome que deseja procurar");
    } else {
      let names = users.filter((user) => {
        user.name.toUpperCase() === name.toUpperCase();
      });
      if (names.length >= 1) {
        res.status(202).send(names);
      } else if (names.length < 1) {
        errorCode = 422;
        throw new Error("Usuário não encontrado.");
      }
    }
  } catch (e: any) {
    res.status(errorCode).send(e.message);
  }
});


app.post("/users", (req, res) => {
    let errorCode: number = 400
    try {
    const { id, name, email, type, age } = req.body;

    if (!id || !name || !email || !type || !age) {
      errorCode = 422;
      throw new Error("Verifique se todos os dados estão preenchidos")
    }

    const newUser: User = {
      id,
      name,
      email,
      type,
      age,
    }

    users.push(newUser);
    res.status(201).send("Usuário cadastrado com sucesso!");

  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
})

//com PUT funcionou, mas ele é mais utilizado para alterar algum recurso já existente

//exercício 5
app.put("/users/altusername", (req, res) => {
    const id = Number(req.query.id)
    let errorCode = 400
    try {
        if (!req.body.name) {
          errorCode = 422;
          throw new Error("Verifique se todos os dados estão preenchidos")
        }
        
        let altUser = users.filter((user) => user.id === id).map((user) => {
        return ( user = {
                id: id,
                name: req.body.name + "- ALTERADO",
                email: user.email,
                type: user.type,
                age: user.age
            })
        })
        
        users.push(altUser[0]);
        res.status(201).end;
    
      } catch (error: any) {
        res.status(errorCode).send(error.message);
      }
})

//exercício 6
app.patch("/users/altnamewithpatch", (req, res) => {
    const id = Number(req.query.id)
    let errorCode = 400
    try {
        if (!req.body.name) {
          errorCode = 422;
          throw new Error("Verifique se todos os dados estão preenchidos")
        }
        
        let altUser = users.filter((user) => user.id === id).map((user) => {
        return ( user = {
                id: id,
                name: req.body.name + "- REALTERADO",
                email: user.email,
                type: user.type,
                age: user.age
            })
        })
        
        users.push(altUser[0]);
        res.status(201).end;
    
      } catch (error: any) {
        res.status(errorCode).send(error.message);
      }
})



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

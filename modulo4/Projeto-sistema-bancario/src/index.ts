import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users, User } from "./data";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/users", (req, res) => {
  let errorCode = 400;

  try {
    const { name, cpf, birth } = req.body;

    if (!name || !cpf || !birth) {
      errorCode = 422;
      throw new Error("Verifique se todos os campos estão preenchidos");
    }

    let checkCpf = users.find((user) => user.cpf === cpf);
    if (checkCpf !== undefined || null) {
      errorCode = 409;
      throw new Error(
        "CPF já cadastrado. Verifique seus dados e tente novamente."
      );
    }

    let currentYear = new Date().getTime();
    let [day, month, year] = birth.split("/");
    let birthTime: string = year + "-" + month + "-" + day;
    let age = Date.parse(birthTime);

    if (currentYear - age < 18 * 31536000000) {
      errorCode = 422;
      throw new Error(
        "Para criar uma conta no LabeBank é necessário ter, no mínimo, 18 anos."
      );
    }

    const newUser: User = {
      name,
      cpf,
      birth,
      balance: 0,
      transactions: [],
    };

    users.push(newUser);
    res.status(201).send("Cliente cadastrado com sucesso!");
  } catch (e: any) {
    res.status(errorCode).send(e.message);
  }
});

app.get("/users", (req, res) => {
  let usersNames = users.map((user) => user.name);
  res.status(200).send(usersNames);
});

app.get("/users/balance/:name/:cpf", (req, res) => {
  let errorCode = 400;
  try {
    let name = req.params.name;
    let cpf = req.params.cpf;

    if (!name || !cpf) {
      errorCode = 401;
      throw new Error("O nome e o CPF devem ser preenchidos");
    }

    let userData = users.find((user) => user.cpf === cpf && user.name === name);
    if (userData === undefined) {
      errorCode = 422;
      throw new Error("Verifique se os campos estão preenchidos corretamente");
    } else {
      let balance = userData.balance;
      res.send(`O seu saldo é: R$ ${balance}`);
    }
  } catch (e: any) {
    res.status(errorCode).send(e.message);
  }
});


app.put("/users/bankentry", (req, res) => {
  let errorCode = 400;
  let { name, cpf, value } = req.body;
  try {
    if (!name || !cpf || !value) {
      errorCode = 401;
      throw new Error("Todos os campos devem ser preenchidos");
    }
    let userData = users.find(
      (user) =>
        user.name.toLowerCase() === name.toLowerCase() && user.cpf === cpf
    );
    if (userData === undefined) {
      errorCode = 422;
      throw new Error("Verifique se os dados foram preenchidos corretamente");
    } else {
      let newBalance: number = userData.balance + value;
      userData = {
        ...userData,
        balance: newBalance,
      };
      const today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth() + 1;
      let day = today.getDate();
      userData.transactions.push({
        value,
        date: `${day}/${month}/${year}`,
        description: "Depósito de dinheiro",
      });
      console.log(userData);
    }
    res.status(201).send("Saldo adicionado com sucesso!");
  } catch (e: any) {
    res.status(errorCode).send(e.message);
  }
});

app.post("/users/pay", (req, res) => {
  let errorCode = 400;

  try {
    let { cpf, value, date, description } = req.body;
    const userData = users.find((user) => user.cpf === cpf);

    if (!value || !description) {
      errorCode = 401;
      throw new Error("Preencha todos os campos");
    }

    if (userData === undefined) {
      errorCode = 401;
      throw new Error("Usuário não encontrado. Verifique o CPF.");
    } else if (userData !== undefined && userData.balance < value) {
      errorCode = 403;
      throw new Error("O valor do pagamento não pode ser maior que o saldo.");
    } else if (userData !== undefined && userData.balance > value && date) {
      let paymentDate: string = date.split("/").reverse().join("-");
        if (Date.parse(paymentDate) + 86340000 < Date.now()) {
            errorCode = 422;
            throw new Error(
            "A data de pagamento não pode ser anterior à data atual"
            );
        } else {
            userData.transactions.push({
                value,
                date,
                description,
            });
            userData.balance -= value;
        }
    } else if (userData !== undefined && userData.balance > value && !date) {
        const today = new Date();
            let year = today.getFullYear();
            let month = today.getMonth() + 1;
            let day = today.getDate();
          userData.transactions.push({
          value,
          date: `${day}/${month}/${year}`,
          //ARRUMAR DATA COM 0 ANTES
          description,
        });
        userData.balance -= value;
    }
   
    res.status(201).send("Pagamento efetuado com sucesso!");
  } 
    catch (e: any) {
    res.status(errorCode).send(e.message);
  }
})

app.post("/users/transfer", (req, res) => {
  let errorCode = 400;
  try {
    let { sendName, sendCpf, receiveName, receiveCpf, value } = req.body;
    if (!sendName || !sendCpf || !receiveName || !receiveCpf || !value) {
      errorCode = 401;
      throw new Error("Preencha todos os campos.");
    }
    let sendUser = users.find((user) => user.cpf === sendCpf);
    let receiveUser = users.find((user) => user.cpf === receiveCpf);
    if (sendUser !== undefined && receiveUser !== undefined) {
      if (sendUser.balance >= value) {
        sendUser.balance -= value;
        receiveUser.balance += value;
      } else {
        errorCode = 403;
        throw new Error(
          "O valor da transferência não pode ser maior que o saldo."
        );
      }
    } else if (sendUser === undefined || receiveUser === undefined) {
      errorCode = 401;
      throw new Error(
        "Verifique se todos os campos estão corretos e tente novamente."
      );
    }
    res.status(200).send("Transferência realizada com sucesso!");
  } catch (e: any) {
    res.status(errorCode).send(e.message);
  }
});

const server = app.listen(process.env.PORT || 3005, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor on na porta ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

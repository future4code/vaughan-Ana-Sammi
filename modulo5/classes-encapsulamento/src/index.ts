import { Request, Response } from "express";
import { app } from "./app";
import { connection } from "./data/connection";
import { UserAccount } from "./data/UserAccount";
import { Transaction } from "./data/UserAccount";

//Exercício 1
// a. O construtor é uma função, que recebe como parâmetros os atributos da classe onde está inserido.

// b. A mensagem foi impressa 1 vez.
const blade: UserAccount = new UserAccount("222.222.222-22", "Blade", 10)


// c. Utilizando getters e setters, dentro da própria classe.


// Exercício 2
// a.
const transacao:Transaction = new Transaction("Boleto", 200, "18/04/2022")
// console.log(transacao)

blade.setTransaction(transacao)
console.log(blade)


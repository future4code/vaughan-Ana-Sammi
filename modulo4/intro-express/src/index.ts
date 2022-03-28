import express, {Request, Response} from "express";
import cors from "cors";
import { parseCommandLine } from "typescript";

const app = express()
app.use(express.json())
app.use(cors())

type User = {
    id: number | string,
    name: string,
    phone: string,
    email: string,
    website: string
}

const Users: User[] = []

const user1: User = {
    id: 1,
    name: "Ana",
    phone: "555666",
    email: "ana@ana.com",
    website: "www.ana.com"
}

const user2: User = {
    id: 2,
    name: "Blade",
    phone: "666777",
    email: "blade@vampirehunter.com",
    website: "www.blade.com"
}

Users.push(user1, user2)

type Post = {
    id: number | string,
    title: string,
    body: string,
    userId: string | number
}

const Posts: Post[] = []

const post1: Post = {
    id: 1,
    title: "Primeiro post",
    body: "Esse é meu primeiro post",
    userId: 1
}

const post2: Post = {
    id: 2,
    title: "Auau",
    body: "Auau au auau",
    userId: 2
}

Posts.push(post1, post2)
// A princípio nesse caso, achei melhor criar os posts fora do array de usuários, pois achei mais fácil
// pegar os posts assim. Mas, se por exemplo, eu fosse criar um endpoint pra pegar todos os posts de um usuário,
// poderia criar os posts já dentro do array de usuários.


app.get("/", (req: Request, res: Response) => {      
    console.log("Teste")    
    res.send("Primeiro endpoint! Uhuu");
})

app.get("/users", (req, res) => {
    console.log("chegaram os usuários")
    res.send(Users)
})

app.get("/posts", (req, res) => {
    console.log("os posts tão na mão")
    res.send(Posts)
})

app.get("/posts/:userId", (req, res) => {
    let id = Number(req.params.userId);
    let getPostsById = Posts.filter((post) => {
        return post.id === id
    })
    res.send(getPostsById)
})

app.delete("/posts/:postId", (req, res) => {
    let id = Number(req.params.postId)
    const deletePost = Posts.filter((post) => {
        return post.id === id
    })
    Posts.shift()

       
})

app.listen(3003, () => {
    console.log("Parece tudo certo")
})
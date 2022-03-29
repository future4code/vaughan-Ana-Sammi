import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/ping", (req, res) => {
  res.send("Pong! 🏓");
});


type Task = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
};


const toDoList: Task[] = [
  {
    userId: 1,
    id: 1,
    title: "cozinhar",
    completed: false,
  },
  {
    userId: 2,
    id: 2,
    title: "limpar",
    completed: true,
  },
  {
    userId: 2,
    id: 3,
    title: "lavar louça",
    completed: false,
  }
];


app.get("/list", (req, res) => {
  res.send(toDoList);
});


app.get("/list/:status", (req, res) => {
  const status = req.params.status;

  const list = toDoList.filter((task) => {
      return String(task.completed) === status
  }) 
 
  res.send(list)
})


app.post("/createtask", (req, res) => {
    const userId = Number(req.headers.authorization)
    const title: string = req.body.title
    const isCompleted: boolean = req.body.completed
    const id = Date.now()

    const newTask = {
        userId: userId,
        id: id,
        title: title,
        completed: isCompleted
    }

   toDoList.push(newTask)

    res.send(toDoList)
})


app.put("/list/:postId", (req, res) => {
    const postId = Number(req.params.postId)

    const changedTask = toDoList.filter((task) => {
        return task.id === postId 
        }).map((task) => {
            return task = {
                userId: task.userId,
                id: task.id,
                title: task.title,
                completed: !task.completed
                }
        })

       res.status(220).send(changedTask) 
    })

    
app.delete("/list/delete/:postId", (req, res) => {
    const postId = Number(req.params.postId)

    const listUpdate = toDoList.filter((task) => {
        return task.id !== postId
    })
    res.status(220).send(listUpdate)
})


app.get("/:userId/list", (req, res) => {
    const userId = req.params.userId
    
    const usersList = toDoList.filter((task) => {
        return task.userId === Number(userId)
    })

    const otherList = toDoList.filter((task) => {
      return task.userId !== Number(userId)
    })

    const newList = {
      todos: {
        selectedUser: usersList, 
        others: otherList
      }
    };

    res.status(220).send(newList)
})



app.listen(3003, () => {
  console.log("Servidor tá rodandoo");
});

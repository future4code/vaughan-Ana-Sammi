import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getFiveUsers } from "./endpoints/getFiveUsers";
import { getUsers } from "./endpoints/getUsers";
import { getUsersByType } from "./endpoints/getUsersByType";
import { orderUsers } from "./endpoints/orderUsers";

// app.get("/users", getAllUsers);
// app.get("/users", orderUsers)
// app.get("/users", getFiveUsers)
// app.get("/users/:type", getUsersByType);
app.get("/users", getUsers)

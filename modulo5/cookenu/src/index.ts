import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUserProfile } from "./endpoints/getUserProfile";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";

app.get("/user", getAllUsers);
app.get("/user/profile", getUserProfile);
app.post("/user", signup);
app.post("/user/login", login);
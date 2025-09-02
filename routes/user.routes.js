import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", authorize, getUsers);

userRouter.get("/:id",authorize, getUser);

userRouter.post("/", (req,res) => { res.send({body : "CREATE new user"});});

userRouter.put("/:id", (req,res) => { res.send({body : "UPDATE the user"});});

userRouter.delete("/:id", (req,res) => { res.send({body : "DELETE the user"});});

export default userRouter;
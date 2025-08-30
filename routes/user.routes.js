import { Router } from "express";

const userRouter = Router();


userRouter.get("/", (req,res) => { res.send({body : "GET all users"})})

userRouter.get("/:id", (req,res) => { res.send({body : "GET user details"})})

userRouter.post("/", (req,res) => { res.send({body : "CREATE new user"})})

userRouter.put("/:id", (req,res) => { res.send({body : "UPDATE the user"})})

userRouter.delete("/:id", (req,res) => { res.send({body : "DELETE the user"})})


export default userRouter
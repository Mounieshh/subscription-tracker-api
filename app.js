import e from "express";

import { PORT } from "./config/env.js";

import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";

import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";
import arcjetMiddleware from "./middleware/arcjet.middleware.js";

const app = e();


app.use(e.json())
app.use(e.urlencoded({extended : false}))
app.use(cookieParser())
app.use(arcjetMiddleware)

app.use('/api/m1/auth', authRouter)
app.use('/api/m1/users', userRouter)
app.use('/api/m1/subscriptions',subscriptionRouter)



app.use(errorMiddleware)


app.get('/', (req, res) => {
    res.send("Welcome to the Subscription Tracker API")
})


app.listen(PORT, async () => {
    console.log(`Subscription Tracker API running on http://localhost:${PORT}`)

    await connectToDatabase()
})
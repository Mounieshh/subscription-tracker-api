import e from "express";

import { PORT } from "./config/env.js";

import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";

import connectToDatabase from "./database/mongodb.js";

const app = e();

app.use('/api/m1/auth', authRouter)
app.use('/api/m1/users', userRouter)
app.use('/api/m1/subscriptions',subscriptionRouter)


app.get('/', (req, res) => {
    res.send("Welcome to the Subscription Tracker API")
})


app.listen(PORT, async () => {
    console.log(`Subscription Tracker API running on http://localhost:${PORT}`)

    await connectToDatabase()
})
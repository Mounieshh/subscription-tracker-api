import e from "express";

import { PORT } from "./config/env";

const app = e();



app.get('/', (req, res) => {
    res.send("Welcome to the Subscription Tracker API")
})


app.listen(PORT, () => {
    console.log(`Subscription Tracker API running on http://localhost:${PORT}`)
})
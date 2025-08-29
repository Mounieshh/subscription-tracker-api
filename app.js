import e from "express";

const app = e();



app.get('/', (req, res) => {
    res.send("Welcome to the Subscription Tracker API")
})


app.listen(5000, () => {
    console.log("Subscription Tracker API running on http://localhost:5000")
})
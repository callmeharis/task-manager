require('dotenv').config()
require('./db/connect')
const express = require('express')
const app = express()
const tasks = require("./routes/tasks")

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Task Manager App")
})

app.use("/api/v1/tasks", tasks)

const port = process.env.PORT

app.listen(port, console.log(`Server is listening on port ${port}`))
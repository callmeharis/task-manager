require('dotenv').config()
const express = require('express')
const app = express()
const tasks = require("./routes/tasks")
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandlerMiddlware = require('./middleware/error-handler')

app.use(express.json())

// Routes
app.use("/api/v1/tasks", tasks)

app.use(notFound)
app.use(errorHandlerMiddlware)


const port = process.env.PORT
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()
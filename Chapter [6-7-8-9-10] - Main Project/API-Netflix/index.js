require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const { ERR, OK } = require("./utils/response")
const routes = require("./routes/index.route")
const mongoose = require("mongoose")
const { MONGO_URL, API_PORT } = process.env

const PORT = API_PORT
app.use(express.json())
app.use(cors())

mongoose.connect(MONGO_URL).catch(err => {
    if (err) {
        console.log("mongodb tidak terhubung")
        throw err
    }
    console.log("mongodb terhubung")
})

app.use(routes)

app.get("/", (request, response) => {
    const data = {
        isRunning: true,
        serverVersion: "1.0.0"
    }
    OK(response, 200, data, "Success getting server endpoint")
})

app.listen(PORT, () => {
    console.log("Server API running di PORT : " + PORT)
})
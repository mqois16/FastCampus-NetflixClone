const express = require("express")
const app = express()
const cors = require("cors")
const { ERR, OK } = require("./utils/response")
const routes = require("./routes/index.route")

const PORT = 3002
app.use(express.json())
app.use(cors())

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
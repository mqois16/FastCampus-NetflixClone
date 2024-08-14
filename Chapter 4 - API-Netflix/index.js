const express = require("express")
const app = express()

const PORT = 3002

app.get("/", (request, response) => {
    response.json({ message: "Heho" })
})

app.listen(PORT, () => {
    console.log("Server API running di PORT : " + PORT)
})
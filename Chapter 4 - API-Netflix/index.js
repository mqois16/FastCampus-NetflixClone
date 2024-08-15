const express = require("express")
const app = express()

const PORT = 3002

app.get("/", (request, response) => {
    response.json({ message: "Heho" })
})

app.get("/movies", (request, response) => {
    console.log("api movie")
    response.json({ data: "movies aiueo" })
})

app.listen(PORT, () => {
    console.log("Server API running di PORT : " + PORT)
})
const express = require("express")
const app = express()

const PORT = 3002

app.get("/", (request, response) => {
    response.json({ message: "Heho" })
})

//melihat listing movies
app.get("/my-movies", (request, response) => {
    console.log("api movie")
    response.json({ data: "movies aiueo" })
})

//menambah listing movies
app.post("/my-movies", (request, response) => {
    console.log("inserting new movies")
    const data = request.body
    console.log({ data })
    response.status(201).json({ message: "success" })
})

//menghapus movies
app.delete("/my-movies/:id/:token", (request, response) => {
    console.log("delete movies...")
    const { id, token } = request.params
    console.log({ id, token })
    reaponse.status(204).json({ message: "success" })
})

//verifikasi
app.post("/token", (request, response) => {
    console.log("creating user token...")
    const data = request.body
    console.log({ data })
    response.status(201).json({ message: "token created" })
})

app.listen(PORT, () => {
    console.log("Server API running di PORT : " + PORT)
})
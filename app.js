const express = require('express')
const filme = require("./model/filme.model.js")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/filmes', async (req, res) => {
    const filmes = await filme.find({})
    res.json(filmes)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

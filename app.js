const express = require('express')
const mongoose = require("mongoose");
const professor = require("./model/professor.model.js")
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/professores', async (req, res) => {
    const professores = await professor.find({})
    res.json(professores)
})

app.get('/professores/:id', async (req, res) => {
    const professores = await professor.findById(req.params.id)
    res.json(professores)
})

app.post('/professores', async (req, res) => {
    try {
        const professorCreated = await professor.create(req.body)
        res.json(professorCreated)
    } catch (error) {
        res.status(500).json({ "error": error.message })
    }
})

app.put('/professores/:id', async (req, res) => {
    const professorUpdate = await professor.findByIdAndUpdate(req.params.id, req.body)
    res.json(professorUpdate)
})

app.delete('/professores/:id', async (req, res) => {
    const professorDelete = await professor.findByIdAndDelete(req.params.id)
    res.json(professorDelete)
})

mongoose.connect('mongodb://127.0.0.1:27017/myapp').then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}).catch((error) => console.log(error))


const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

mongoose.connect('mongodb+srv://admin:admin@cluster0-loo3r.mongodb.net/instagram?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(require('./routes'))

app.listen(3333)
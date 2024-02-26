const express = require('express');
const app = express();
const mongoose = require('mongoose')
const porta = 3000
require('dotenv').config()

const Person = require('./models/Person')

// ler json / middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

// rota inicial

app.get('/', (req, res) => {
    res.json({ message: 'Oi express'})
});



// entregar porta


mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.lppm0id.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(()=>{
    console.log("Conectamos ao MongoDB!");
    app.listen(porta);
})
.catch((err) => console.log(err))





const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const userRoutes = require('./router/usuarioRouter')

const app = express()
dotenv.config()

app.use(express.json())
app.use('/api/usuarios', userRoutes)

const connect =()=>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log('Conectado ao MongoDB cloud')
    }).catch((erro)=>{
        throw erro
    })
}

app.listen(3000, ()=>{
    console.log("Server iniciado na porta 3000")
    connect()
})
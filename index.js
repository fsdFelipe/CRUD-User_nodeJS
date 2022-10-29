const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const app = express()
dotenv.config()

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
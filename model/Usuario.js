const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        nome:{
            type : String,
            required : true,
            unique : true,
        },
        email:{
            type : String,
            required : true,
            unique : true,
        },
        senha:{
            type : String,
            required : true,
        },
        img:{
            type : String,
        },
    },
    {timestamps : true}
)
mongoose.model('Usuarios', UserSchema);
module.exports = mongoose.model('Usuarios');
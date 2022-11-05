const Usuario = require('../model/Usuario')


//Novo usuario
const newUsuario = async (req, res, next) =>{
    try{
      const usuario = await Usuario.findOne({nome: req.body.nome})
      if(usuario) return res.status(200).json('Usuario ja existe')
        const newUser = new Usuario({...req.body})
        await newUser.save()
        res.status(200).send('Usuario Cadastrado')
    }catch(erro){
        next(erro)
    }
    
}

  //Alterar dados do usuario
const updateUsuario = async (req, res, next) => {
  const {id} = req.params;
  try {
      const usuarioUpdate = await Usuario.findByIdAndUpdate(id,
        { $set : req.body},
        {new: true}
        );
      return res.status(200).json(usuarioUpdate);
  } catch (erro) {
    return next(erro);
  }
  };

  //Deletar usuario
  const deleteUsuario = async (req, res, next) => {
    const {id} = req.params
      try {
        await Usuario.findByIdAndDelete(id);
        res.status(200).json("Usuario deletado !");
      } catch (erro) {
        next(erro);
      }
  };

  // Get Usuario
 const getUser = async (req, res, next) =>{
    try{
      const usuario = await Usuario.findById(req.params.id)
      res.status(200).json(usuario)
    }catch(erro){
      next(erro)
    }
  }

  // Get todos Usuarios
 const getAll = async (req, res, next) =>{
  try{
    const usuarios =  await Usuario.find({})
      res.status(200).json(usuarios)
 }catch(erro){
     next(erro)
 }
  }
  
  module.exports = {
    getUser,
    getAll,
    newUsuario,
    deleteUsuario,
    updateUsuario
  };
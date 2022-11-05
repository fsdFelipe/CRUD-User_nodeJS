const express = require('express')
const router = express.Router()
const { getAll, updateUsuario, deleteUsuario, newUsuario, getUser} = require('../controllers/usuarioController')

//rota exibir usuario por id
router.get('/:id', getUser)
//rota exibir todos usuarios
router.get('/', getAll)
//rota alterar usuario
router.put('/:id', updateUsuario)
//rota excluir usuario
router.delete('/:id', deleteUsuario)
//rota adcionar usuario
router.post('/cadastro', newUsuario)

module.exports = router;
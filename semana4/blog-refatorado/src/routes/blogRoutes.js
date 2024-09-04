const express = require('express')
const blogController = require('../controllers/blogController')
const userController = require('../controllers/userController')

const router = express.Router()

router.post('/texts', blogController.createPost)
router.get('/texts', blogController.listPosts)
router.get('/text', blogController.listPost)

//atualizar um texto
router.patch('/text/:id', blogController.updatePost)

//apagar um texto 
router.delete('/text/:id', blogController.deletePost)

router.post('/users', userController.createUser)
router.get('/users', userController.listUsers)

module.exports = router
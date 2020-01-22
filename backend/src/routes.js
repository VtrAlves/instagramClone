const express = require('express')
const multer = require('multer')
const postController = require('./controllers/postController')

const routes = new express.Router
const upload = multer()

routes.post('/posts', upload.single('image'), postController.store)

module.exports = routes
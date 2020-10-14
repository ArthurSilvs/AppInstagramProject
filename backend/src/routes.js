const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const Postcontroller = require('./controllers/PostController');
const Likecontroller = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);


routes.get('/', Postcontroller.index);
routes.post('/posts', upload.single('imagem'), Postcontroller.store);
routes.post('/posts/:id/like', Likecontroller.store);
module.exports = routes;
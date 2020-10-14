const Post = require('../models/Post');
//const Sharp = require('sharp');
//const path = require('path');
//const fs = require('fs');


module.exports = {
    async index(req , res){
        const posts = await Post.find().sort('-createdAt');
        return res.json(posts);
    },

    async store(req, res){
       const {autor, lugar, descricao, hashtags} = req.body;
       const {filename: imagem} = req.file;

       const[name] = imagem.split(".");
       const filename = `${name}.jpg`; 
        // Salvar imagens redimensionadas em uma pasta
       /*await Sharp(req.file.path)
           .resize(500)
           .jpeg({ qulity:70 })
           .tofile(
               path.resolve(req.file.destination, 'resized', imagem)
           )
           Apaga a imagem após ela ser salva e redimensionada
           fs.unlinkSync(req.file.path);
           */
       

       const post = await Post.create({
           autor,
           lugar,
           descricao,
           hashtags,
           imagem: filename,
       });    

       req.io.emit('post', post);

       return res.json(post); 
    }
}
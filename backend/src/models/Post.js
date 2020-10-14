const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    autor: String, 
    lugar: String,
    descricao: String,
    hashtags: String,
    imagem: String,
    likes:{
        type: Number,
        default: 0,
    }
},{
    timestamps: true,
});

module.exports = mongoose.model('Post', postSchema);
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Book & Person Schema schema
const bookSchema = new Schema({
    title: String,
    author: String,
    pages: Number,
    genres: Array,
    rating: Number
})

//models 
const Book = mongoose.model('Book', bookSchema);

module.exports = Book
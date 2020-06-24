const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const librosSchema = new Schema({
    tituloLibro: String,
    Autor: String,
    Descripcion: String,
    anioPublicacion: String,
});

module.exports = mongoose.model('Libros', librosSchema);
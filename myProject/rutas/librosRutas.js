const express = require('express');
const rutasLibros = require('../modeloLibros/libroControl');

var api = express.Router();

//Ruta POST agregar libros
api.post('/', rutasLibros.crearLibro);
//Ruta GET consultar libros
api.get('/', rutasLibros.obtenerLibro);
//Ruta PUT actualizar libros
api.put('/:id', rutasLibros.actualizarLibro);
//Ruta DELETE eliminar libros
api.delete('/:id', rutasLibros.eliminarLibro);

module.exports = api;
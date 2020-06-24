const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use( bodyParser.json() );
const cors = require('cors');
const morgan = require('morgan');


//Rutas de la API
const rutaLibros = require('./rutas/librosRutas');

//MIDDLEWARES
app.use(express.json())
app.use(cors());
app.use(morgan('start'));

//CONSUMO DE RUTAS
app.use('/api', rutaLibros);

module.exports = app;
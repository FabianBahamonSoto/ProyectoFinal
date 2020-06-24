const mongoose = require('mongoose');
const app = require('./app');

//const port = (process.env.port || 3000);
const port = 3000;
const URI = 'mongodb://localhost:27017/Libros';

mongoose.connect(URI, (err, res) => {
    if(err)
    {
        console.log("Existe un error en el servidor mongoose " + err);
    } else {
        console.log("¡Conexión exitosa!");
        app.listen(port, function(){
            console.log('Puerto de conexión: ' + port);
        });
    }
});
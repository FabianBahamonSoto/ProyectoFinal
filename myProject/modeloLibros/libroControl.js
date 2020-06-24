//Importo libros.js
const Libros = require('./libros');
const _ = require('underscore');

function estado(a, b, c, d)
{
    console.log("El valor a: " + a);
    console.log("El valor b: " + b);
    console.log("El valor c: " + c);
    console.log("El valor d: " + d );

    if(a != undefined && b != undefined && c != undefined && d == undefined){
        //alert('Pofavor ingresa el año de publicación');
        return noSave = 1;
    } 
    else if(a != undefined && b != undefined && c == undefined && d != undefined){
        //alert('Pofavor ingresa una descripcion');
        return noSave = 1;
    } 
    else if(a != undefined && b == undefined && c != undefined && d != undefined){
        //alert('Pofavor ingresa el autor');
        return noSave = 1;
    } 
    else if(a == undefined && b != undefined && c != undefined && d != undefined){
        //alert('Pofavor ingresa el titulo del libro');
        return noSave = 1;
    } 
    else if (a  != undefined && b  != undefined && c  != undefined && d != undefined){
        return noSave = 0;
    }
}

// Creando un libro en la base de datos
function crearLibro(req, res) {
    const newBook = new Libros();

    newBook.tituloLibro = req.body.tituloLibro,
    newBook.Autor = req.body.Autor,
    newBook.Descripcion = req.body.Descripcion,
    newBook.anioPublicacion = req.body.anioPublicacion,

    estado(newBook.tituloLibro, newBook.Autor, newBook.Descripcion, newBook.anioPublicacion);

    if(noSave == 0)
    {
        newBook.save((err, saveBook)=>
        {
            if(err){

                res.status(500).send({status: 500, message:'Error en el servidor '});
            } 
            else 
            {
                if (!saveBook)
                {
                    console.log('El error esta aca');
                    res.status(400).send({status: 400, message:'No fue posible realizar el registro del libro'});
                } 
                else {
                    res.status(200).send
                    ({
                        status: 200, message: 'El libro se creo correctamente',
                        newLibro: saveBook,
                    });
                }
            }
        });
    } else if (noSave != 0)
    {
        res.status(500).send({message: "Sin el dato no es posible guardar el libro"});
    }
};

//Obtener un libro 
function obtenerLibro(req, res)
{
    Libros.find((err, libroEncontrado) =>
    {
        if(err){
            res.status(500).send({status: 500, message: 'Error en el servidor'});
        } 
        else 
        {
            if(!libroEncontrado)
            {
                res.status(400).send({message:'No fue posible encontrar la tarea'});
            } 
            else {
                res.status(200).send
                ({
                    status: 'Libro encontrado',
                    getBook: libroEncontrado,
                });
            }
        }
    });
};

//Actualizando libro 
 function actualizarLibro(req, res)
 {
     var bookId = req.params.id;
     var nuevosDatosTarea = req.body;

     Libros.findByIdAndUpdate(bookId, nuevosDatosTarea, (err, libroActualizado)=>
     {
        if(err)
        {
            res.status(500).send({status: 500, message: 'Error en el servidor'});
        } 
        else
        {
            if (!libroActualizado)
            {
                res.status(400).send({status: 400, message: 'No fue posible actualizar el libro'});
            }
            else {
                res.status(200).send(
                    {
                    status: 200, message: 'Libro actualizado.',
                    updatedBook: nuevosDatosTarea,
                    });
            }
        }
     });
 }

 //Eliminar libro
 function eliminarLibro(req, res)
 {
    var bookId = req.params.id;

    Libros.findByIdAndDelete(bookId, (err, libroEliminado)=>{
        if(err)
        {
            res.status(500).send({status: 500, message: 'Error al eliminar el libro'});
        } 
        else
        {
            if (!libroEliminado)
            {
                res.status(400).send({status: 400, message: 'No fue posible eliminar el libro'});
            }
            else {
                res.status(200).send(
                    {
                    status: 200, message: 'Libro eliminado satisfactoriamente.',
                    deleteBook: libroEliminado,
                    });
            }
        }
    });
 }


//Exportamos las funciones 
module.exports = {
    crearLibro,
    obtenerLibro,
    actualizarLibro,
    eliminarLibro,
};
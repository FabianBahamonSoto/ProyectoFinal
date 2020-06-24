import { Component, OnInit } from '@angular/core';

import {Libros} from '../../models/libros';
import {LibrosService} from '../../services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit 
{
  public librosRegistrados: Libros;
  public libroEncontrado: any = [];

  constructor(private libroService: LibrosService) 
  {
    this.librosRegistrados = new Libros("", "", "", "", "");
  }

  ngOnInit(): void 
  {
    this.mostrarLibros();
  }

    //Consumo servicio crear libro  con el metodo agregarLibro
    agregarLibro(){
      this.libroService.crearLibro(this.librosRegistrados).subscribe
      (
        (response: any)=>
        {
          let newLibro = response.libro;
          this.librosRegistrados = newLibro;
          if(response.status != 200){
            alert('Error al registrar la tarea');
          } 
          else 
          {
            alert('Registro de la tarea exitoso!\ntiene un nuevo titulo en la base de datos.');
            this.librosRegistrados = new Libros(" ", " ", " ", " ", " ");
            this.mostrarLibros();
          }
        },
        (error)=>{
          var errorMensaje = <any>error;
          if(errorMensaje != null){
            console.log(error);
          }
        }
      )
      };
  
    //Consumo del servicio obtener libros con el metodo mostrarLibros
    mostrarLibros()
    {
      this.libroService.obtenerLibro().subscribe(
        (response: any)=>{
          this.libroEncontrado = response.getBook;
        },
        (error) => 
        {
          var errorMensaje = <any>error;
          if(errorMensaje != null)
          {
            console.log(error);
          }
        }
      )
    }
  
    // Consumo el servicio actualizar libro con el metodo editarLibro
    editarLibro(libro)
    {
      this.libroService.actualizarLibro(libro._id, libro).subscribe
      (
        (response: any) => 
        {
          console.log('El response ' + response.libro);
          if(response.status != 200)
          {
            alert('No fue posible actualizar el libro');
          } 
          else 
          {
            alert('El libro ha sido actualizado correctamente');
            this.mostrarLibros();
          }
        },
        (error) => {
          if(error!=null){
            console.log("Hay un error ni el Hp"); ////BORRRAARRRR!!!
          }
        }
      )
    }
  
    //Consumo el servicio de eliminar un libro con el metodo eliminarLibro
    eliminarLibro(idLibro)
    {
      this.libroService.eliminarLibro(idLibro).subscribe
      (
        (response:any) =>
        {
          if(response.status != 200)
          {
            alert('No fue posible eliminar el libro');
          } 
          else 
          {
            alert('El libro fue eliminado exitosamente');
            this.mostrarLibros();
          }
        },
        (error) =>
        {
          if(error != null){
            console.log(error);
          }
        }
      )
    }
}

import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {observable} from "rxjs"; 

@Injectable()
export class LibrosService {

  url = 'http://localhost:3000/api/';
  constructor(private _http: HttpClient) { }

  //Creando un Libro 
  crearLibro(libroNuevo)
  {
    let params = JSON.stringify(libroNuevo);
    let options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
    };
    return this._http.post(this.url, params, options).pipe(map((res)=>res));
  }
  //Obetener la lista de los libros 
  obtenerLibro()
  {
    return this._http.get(this.url).pipe(map((res)=>res));
  }
  //Actualizar un libro existente
  actualizarLibro(idLibro, libroActualizado)
  {
    let params = JSON.stringify(libroActualizado);
    let options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
    };
    return this._http.put(this.url + idLibro, params, options).pipe(map((res)=>res));
  }
  //Eliminado un libro de la bs
  eliminarLibro(idLibro)
  {
    let options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
    };
    return this._http.delete(this.url + idLibro, options).pipe(map((res)=>res));
  }
}

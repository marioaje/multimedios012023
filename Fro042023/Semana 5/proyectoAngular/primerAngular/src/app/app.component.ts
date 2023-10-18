import { Component } from '@angular/core';

import { Curso } from './models/curso';
// import importa archivos o librerias
// {} es el nombre de la variable que va a tener las propiedades del from
// from es la ruta 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Creacion de variables, atributos, modelos, propiedades
  title = 'Clase Jueves';

  arregloCurso: Curso[] = [
    { id:"1", nombre: "Nuevo", descripcion:"Nuevo Curso", tiempo:"1 mes", usuario:"mario"},
    { id:"2", nombre: "Nuevo 2", descripcion:"Nuevo Curso 2", tiempo:"12 mes", usuario:"mario"},
    { id:"3", nombre: "Nuevo 3", descripcion:"Nuevo Curso 3", tiempo:"13 mes", usuario:"mario"},
    { id:"4", nombre: "Nuevo 4", descripcion:"Nuevo Curso 4", tiempo:"14 mes", usuario:"mario"}    
  ]

  // id: string = "";
  // nombre: string = "";
  // descripcion: string= "";
  // tiempo: string= "";
  // usuario: string= "";


  //Este seria el controlador
}

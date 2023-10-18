import { Component, Input, OnInit } from '@angular/core';
import { Curso } from './models/curso';
import { ApiService } from './service/api.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ModalSuccessComponent } from './modal-success/modal-success.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'academia';
  

  //Revisar el class room Marzo, y verificar la cantidad de alumn
  cursosarray : Array<Curso>=[
    {
      id: "01",
      nombre: "Matematicas",
      descripcion: "Matematicas",
      tiempo: "1 mes",
      usuario: 'Prof Mario'
    },{
      id: "02",
      nombre: "Matematicas 02",
      descripcion: "Matematicas 02",
      tiempo: "1 mes",
      usuario: 'Prof Mario'
    },{
      id: "011",
      nombre: "Matematicas 11",
      descripcion: "Matematicas 11",
      tiempo: "1 mes",
      usuario: 'Prof Mario'
    },{
      id: "017",
      nombre: "Fisica",
      descripcion: "Fisica",
      tiempo: "1 mes",
      usuario: 'Prof Mario'
    }
]

  datos: any[] = [];

//   apis/InsertarCursos.php
curso = { 
  nombre: '', 
  descripcion: '',
  tiempo: '',
  usuario:'profesor Mario'
};
  
  cursos: any = {}; // Curso seleccionado para edición
  bsModalRef: BsModalRef | undefined;
  constructor(private apiService: ApiService, private modalServicio: BsModalService ) { }


  //equivalencia didmount, docready
  ngOnInit() : void {
    this.cargarDatos();
    //const modalRef = this.modalService.open(MiModalComponent); 
  }

  insertarCurso(){

    this.apiService.insertarDatosCurso(this.curso).subscribe(
      response => {        
        console.log("curso insertado", response);
        this.refrecarPagina();
      }
    )
    
  }

  openModalSuccess(id:string, nombre:string, descripcion: string){

    const initialState = {
      usuarioNombre: nombre,
      id: id,
      nombre: nombre,
      descripcion: descripcion
    }

   
    this.bsModalRef = this.modalServicio.show(ModalSuccessComponent, { initialState } );    
  
  }

  closeModalSuccess(){
    if (this.bsModalRef) {
      this.bsModalRef.hide(); // Cierra el modal
    }
  }

  cargarDatos(){
   // this.openModalSuccess();
    
    //this.modalService.open('#miModal'); 
    //alert('Loading');
    this.apiService.cargarDatosCurso().subscribe(
      data => {
        this.datos = data.data;
       // console.log(this.datos);
      }
    )

    // editarCurso(this.cursos: any) {
    //   alert("editadndo");
    //   //this.curso = { ...curso };
    // }
  
    // actualizarCurso() {
    //   this.apiService.actualizarDatosCurso(this.curso).subscribe(
    //     response => {
    //       const index = this.cursosarray.findIndex(c => c.id === this.curso.id);
    //       if (index !== -1) {
    //         this.cursosarray[index] = response;
    //       }
    //       this.curso = {};
    //     },
    //     error => {
    //       console.error('Error al actualizar el curso:', error);
    //     }
    //   );
    // }

  //       fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php")//la url de peticion 
  //       .then(respuesta => respuesta.json())//recibe los datos en json
  //       .then((datosrespuesta) => {
  //         //  console.log('datosrespuesta',datosrespuesta.data)
  //           settable(datosrespuesta.data)
  //       } )
  //       .catch(console.log)
  //   }
  }
///ng g s service/api

  refrecarPagina()  {
    window.location.reload();
  }



  
}

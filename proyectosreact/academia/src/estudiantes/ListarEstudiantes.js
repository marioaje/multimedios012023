import React from 'react';
//imr

//ccc
class ListarEstudiantes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                datosCargados:false,
                datosLista:[],
                id:0,
                nombre:"",
                descripcion:"",
                tiempo:"",
                usuario:""
            }
    }

    
    cargarDatos(){
        fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php")//la url de peticion 
        .then(respuesta => respuesta.json())//recibe los datos en json
        .then((datosrespuesta) => {
            this.setState({datosCargados:true, datosLista:datosrespuesta.data})
            console.log(datosrespuesta.data)
        } )
        .catch(console.log)
    }

    componentDidMount(){
        this.cargarDatos();
    }

    render() { 
        const {
            datosCargados,
            datosLista,
            id,
            nombre,
            descripcion,
            tiempo,
            usuario
        } = this.state

        return ( 
            <div>
                <h2>Listar Estudiantes</h2>
                <div class="table-responsive">
                    <table class="table table-striped
                    table-hover	
                    table-borderless
                    table-light
                    align-middle">
                        <thead class="table-light">                            
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Tiempo</th>
                                <th>Usuario</th>
                                <th>Acciones</th>
                            </tr>
                            </thead>
                            <tbody class="table-group-divider" id="resultados">
                                {
                                    datosLista.map(
                                        (datosExtraidos)=>(
                                            <tr class="table-light" key={datosExtraidos.id}>
                                                <td>{datosExtraidos.id}</td>
                                                <td>{datosExtraidos.nombre}</td>
                                                <td>{datosExtraidos.descripcion}</td>
                                                <td>{datosExtraidos.tiempo}</td>
                                                    <td>{datosExtraidos.usuario}</td>
                                                <td>
                                                    {/* <a name="" id="" class="btn btn-primary" href="#" role="button">Editar</a>
                                                    ||
                                                    <a name="" id="" class="btn btn-danger" role="button" onclick="funcioneliminar('${valor.id}')">Eliminar</a> */}
                                                </td>
                                            </tr>  
                                        )
                                    )
                                }
                            
                            </tbody>
                            <tfoot>
                                
                            </tfoot>
                    </table>
                </div>                
            </div>
         );
    }
}
 
export default ListarEstudiantes;


// <!doctype html>
// <html lang="en">

// <head>
//   <title>Listar Curso</title>
//   <!-- Required meta tags -->
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

//   <!-- Bootstrap CSS v5.2.1 -->
//   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
//     integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
// </head>

// <body>
//   <div class="container-fluid">
//       <header>
        
//         <!-- Nav tabs -->
//         <div id="loadmenu">

//         </div>
//       </header>
//       <main>
        
//         <div class="table-responsive">
//             <table class="table table-striped
//             table-hover	
//             table-borderless
//             table-light
//             align-middle">
//                 <thead class="table-light">
//                     <caption>Listar Curso</caption>
//                     <tr>
//                         <th>Id</th>
//                         <th>Nombre</th>
//                         <th>Descripcion</th>
//                         <th>Tiempo</th>
//                         <th>Usuario</th>
//                         <th>Acciones</th>
//                     </tr>
//                     </thead>
//                     <tbody class="table-group-divider" id="resultados">

                      
//                     </tbody>
//                     <tfoot>
                        
//                     </tfoot>
//             </table>
//         </div>
//       </main>
//       <footer>
//         <!-- place footer here -->
//       </footer>

// <!-- Modal Eliminar -->
// <!-- if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard -->
// <div class="modal fade" id="modalEliminar" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
//   <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
//     <div class="modal-content">
//       <div class="modal-header bg-warning">
//         <h5 class="modal-title" id="modalTitleId">Modal Eliminar</h5>
//           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         <input type="hidden" name="idEliminar" id="idEliminar">
//         Desea eliminar el registro: <span id="resultadoId"></span> ?
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-danger" onclick="eliminarId()">Eliminar</button>
//       </div>
//     </div>
//   </div>
// </div>

//   </div>
//   <!-- Bootstrap JavaScript Libraries -->
//   <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
//     integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
//   </script>

//   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
//     integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
//   </script>
//   <script src="js/menu.js"></script>
//   <script src="js/listarcursos.js"></script>
//   <script>
// //     var contenidoTablaResultado = document.querySelector("#resultados");
// //     var loadmenu = document.querySelector("#loadmenu");
// //     const modalEliminar = new bootstrap.Modal(document.getElementById('modalEliminar'));

// //     function cargarDatos(){
// // //"id":"174","nombre":"Progrmacion JR webgh","descripcion":"Para nuevos estudiantes","tiempo":"8"
// //         fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php")//la url de peticion 
// //         .then(respuesta => respuesta.json())//recibe los datos en json
// //         .then((datosrespuesta) => {
// //           //  console.log('datosrespuesta',datosrespuesta.data)
// //             settable(datosrespuesta.data)
// //         } )
// //         .catch(console.log)
// //     }

// //     function settable(data){
// //        // console.log('data',data);
       
// //         for (const valor of data) {
// //            // console.log('valor: ',valor);
// //             contenidoTablaResultado.innerHTML += 
// //                     `<tr class="table-light" >
// //                             <td scope="row">${valor.id}</td>
// //                             <td>${valor.nombre}</td>
// //                             <td>${valor.descripcion}</td>
// //                             <td>${valor.tiempo}</td>
// //                             <td>${valor.usuario}</td>
// //                             <td>
// //                               <a name="" id="" class="btn btn-primary" href="#" role="button">Editar</a>
// //                               ||
// //                               <a name="" id="" class="btn btn-danger" role="button" onclick="funcioneliminar('${valor.id}')">Eliminar</a>
// //                             </td>
// //                         </tr>`;
// //         }
// //     }

// //     function funcioneliminar(id){
// //       modalEliminar.show();
// //       document.getElementById('resultadoId').innerHTML = id;
// //       document.getElementById('idEliminar').value = id;      
// //     }

// //     function eliminarId(){
// //       id = document.getElementById('idEliminar').value;

// //       var datosenviar ={
// //         id: id
// //       };

// //       fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarCursos.php",
// //         {
// //             method:'POST',
// //             body: JSON.stringify(datosenviar)
// //         }
// //         )//url de peticion de datos
// //             .then(respuesta => respuesta.json())//recibe los datos en formato json
// //             .then((datosrepuesta) => {                
// //                 completeDelete()
// //             })
// //             .catch(console.log)//muestra errores
// //     }

// //     function completeDelete(){
// //       modalEliminar.hide();
// //       contenidoTablaResultado.innerHTML = ``;
// //       cargarDatos();
// //     }

// //     cargarDatos();
  
//   </script>

//           <!-- (Optional) - Place this js code after initializing bootstrap.min.js or bootstrap.bundle.min.js -->
//           <script>
//             var triggerEl = document.querySelector('#navId a')            
//           </script>
// </body>
// </html>
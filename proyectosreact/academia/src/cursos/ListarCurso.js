import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//imr

//ccc
class ListarCurso extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                datosCargados:false,
                datosLista:[],
                id:0,
                nombre:"",
                descripcion:"",
                tiempo:"",
                usuario:"",
                cargarmodal:false
            }
    }

    
    cargarDatos(){
        fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php")//la url de peticion 
        .then(respuesta => respuesta.json())//recibe los datos en json
        .then((datosrespuesta) => {
            this.setState({datosCargados:true, datosLista:datosrespuesta.data})
          //  console.log(datosrespuesta.data)
        } )
        .catch(console.log)
    }
   
    funcioneliminar = (id)=>{            
        var datosenviar ={
                    id: id
                  };
            
                  fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarCursos.php",
                    {
                        method:'POST',
                        body: JSON.stringify(datosenviar)
                    }
                    )//url de peticion de datos
                        .then(respuesta => respuesta.json())//recibe los datos en formato json
                        .then((datosrepuesta) => {                
                            alert("Borre")
                        })
                        .catch(console.log)//muestra errores
    }

    funcioneditar(objeto){
       // console.log(objeto);
        this.openModal();
        this.setState( {
            id:objeto.id,
            nombre:objeto.nombre,
            descripcion:objeto.descripcion,
            tiempo:objeto.tiempo 
        } );        
        //alert("test");
    }

    enviarDatos = (e)=>{
        e.preventDefault();
        
        const {id, nombre, tiempo, descripcion } = this.state;
        var datosEnviar = {
            id:id,
            nombre: nombre,
            tiempo: tiempo,
            descripcion: descripcion,
            usuario: "Prof Mario VLA"
        }

        fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarCursos.php",
        {
            method: "POST"   ,
            body: JSON.stringify(datosEnviar)
        }        
        )//la url de peticion 
        .then(respuesta => respuesta.json())//recibe los datos en json
        .then((datosrespuesta) => {
           // console.log('datosrespuesta',datosrespuesta.data)
            this.setState ({datosCargados:true})
            window.location = "ListarCurso"
        } )
        .catch(console.log)
    }

    openModal(){
        this.setState({cargarmodal:true})
    }

    closeModal(){
        this.setState({cargarmodal:false})
    }

    cambiovalor = (e)=>{
        const state = this.state;
        state[e.target.name]=e.target.value;
        this.setState({state});
    }


    componentDidMount(){
        this.cargarDatos();
    }
    state = {  }

    render() { 
        const {
            datosCargados,
            datosLista,
            id,
            nombre,
            descripcion,
            tiempo,
            usuario,
            cargarmodal
        } = this.state

        return ( 
            <div>
                <h2>Listar Curso</h2>
                <div className="table-responsive">
                    <table className="table table-striped
                    table-hover	
                    table-borderless
                    table-light
                    align-middle">
                        <thead className="table-light">                            
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Tiempo</th>
                                <th>Usuario</th>
                                <th>Acciones</th>
                            </tr>
                            </thead>
                            <tbody className="table-group-divider" id="resultados">
                                {
                                    datosLista.map(
                                        (datosExtraidos)=>(
                                            <tr className="table-light" key={datosExtraidos.id}>
                                                <td>{datosExtraidos.id}</td>
                                                <td>{datosExtraidos.nombre}</td>
                                                <td>{datosExtraidos.descripcion}</td>
                                                <td>{datosExtraidos.tiempo}</td>
                                                    <td>{datosExtraidos.usuario}</td>
                                                <td>
                                                    {/* <a name="" id="" className="btn btn-primary" href="#" role="button">Editar</a>
                                                    ||
                                                    <a name="" id="" className="btn btn-danger" role="button" onclick="funcioneliminar('${valor.id}')">Eliminar</a> */}
                                                    <a name="" id="" className="btn btn-primary" role="button" onClick={ () => this.funcioneditar(datosExtraidos)}>Editar</a> 
                                                    ||
                                                    <a name="" id="" className="btn btn-danger" role="button" onClick={ () => this.funcioneliminar(datosExtraidos.id)}>Eliminar</a> 
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

                <Modal show={cargarmodal} >
                {/* <Modal show={show} onHide={handleClose}> */}
                    <Modal.Header className='bg-success'>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                     <h2>Editar Curso</h2>
                     <form id="formulario" onSubmit={this.enviarDatos}>                     
                            <div className="mb-3">                            
                            <label htmlFor="" className="form-label">Id</label>                           
                            <input type="text" required
                                className="form-control" name="id" id="id" onChange={this.cambiovalor} value={id} aria-describedby="helpId" placeholder="Ingrese su nombre" disabled></input>
                            <small id="helpId" className="form-text text-muted" >Ingrese su nombre</small>
                            </div>

                            <div className="mb-3">                            
                            <label htmlFor="" className="form-label">Nombre</label>                           
                            <input type="text" required
                                className="form-control" name="nombre" id="nombre" onChange={this.cambiovalor} value={nombre} aria-describedby="helpId" placeholder="Ingrese su nombre"></input>
                            <small id="helpId" className="form-text text-muted" >Ingrese su nombre</small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Descripcion</label>
                                <input type="text" required
                                className="form-control" onChange={this.cambiovalor} value={descripcion} name="descripcion" id="descripcion" aria-describedby="helpId" placeholder="Ingrese su descripcion"></input>
                                <small id="helpId" className="form-text text-muted">Ingrese su descripcion</small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Tiempo</label>
                                <input type="text" required
                                className="form-control" onChange={this.cambiovalor} value={tiempo} name="tiempo" id="tiempo" aria-describedby="helpId" placeholder="Ingrese el tiempo"></input>
                                <small id="helpId" className="form-text text-muted">Ingrese el tiempo</small>
                            </div>                          
                            <div className="mb-3">
                            <Button variant="secondary" onClick={ () => this.closeModal() }>
                                Close
                            </Button>
                            ||
                            <button type="submit" className="btn btn-primary">Editar</button>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>                    
                    </Modal.Footer>
                </Modal>                

            </div>
         );
    }
}
 
export default ListarCurso;


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
//   <div className="container-fluid">
//       <header>
        
//         <!-- Nav tabs -->
//         <div id="loadmenu">

//         </div>
//       </header>
//       <main>
        
//         <div className="table-responsive">
//             <table className="table table-striped
//             table-hover	
//             table-borderless
//             table-light
//             align-middle">
//                 <thead className="table-light">
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
//                     <tbody className="table-group-divider" id="resultados">

                      
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
// <div className="modal fade" id="modalEliminar" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
//   <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
//     <div className="modal-content">
//       <div className="modal-header bg-warning">
//         <h5 className="modal-title" id="modalTitleId">Modal Eliminar</h5>
//           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div className="modal-body">
//         <input type="hidden" name="idEliminar" id="idEliminar">
//         Desea eliminar el registro: <span id="resultadoId"></span> ?
//       </div>
//       <div className="modal-footer">
//         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" className="btn btn-danger" onclick="eliminarId()">Eliminar</button>
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
// //                     `<tr className="table-light" >
// //                             <td scope="row">${valor.id}</td>
// //                             <td>${valor.nombre}</td>
// //                             <td>${valor.descripcion}</td>
// //                             <td>${valor.tiempo}</td>
// //                             <td>${valor.usuario}</td>
// //                             <td>
// //                               <a name="" id="" className="btn btn-primary" href="#" role="button">Editar</a>
// //                               ||
// //                               <a name="" id="" className="btn btn-danger" role="button" onclick="funcioneliminar('${valor.id}')">Eliminar</a>
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

// https://jira2.im.priv/browse/PLANNA-3213
// [QA2][AgentSite] Wagers are displayed twice in the Player History report
// Include new property ClassicView

// Agunlar AgentSite Update QA2 Environment Package-67

// api AgentSite Update QA2 Environment Package-05

// BugFix Task:

// Task PLANNA-3213

// Consecutive Packet:

// Route: http://svn.im.priv/SitesBin/AgentSite/Packages/QA2/
// Files Modified: 

// Angular compile
// CSS Files
// Language resources
// api dll
// Sanity Check:

// Go to https://agentsite.qa2/login
// Login to website.
// Redirects to dashboar page
// MOBILE and DESKTOP:
// Go to Report Menu / Select Agent Balance History Report
// Select a date rangeGenerate report


// INTRODUCCIÓN A VMWARE
// ARQUITECTURA Y TECNOLOGÍA VSPHERE
// MÁQUINAS VIRTUALES
// VCENTER SERVER APPLIANCE
// HIPERVISOR VMWARE ESXI
// VSPHERE CLUSTER SERVICES
// VSPHERE SOFTWARE DEFINED NETWORKING
// VSPHERE SOFTWARE DEFINED STORAGE
// VMWARE VIRTUAL SAN
// VSPHERE SECURITY
// ADMINISTRACIÓN Y OPTIMIZACIÓN
// MONITOREO PARA SDDC 
// VSPHERE LIFECYCLE MANAGER
// TROUBLESHOOTING
// MEJORES PRÁCTICAS
// VMWARE CLOUD FOUNDATION
// VMWARE HORIZON VIEW
// VMWARE CLOUD ON AWS
var contenidoTablaResultado = document.querySelector("#resultados");
var loadmenu = document.querySelector("#loadmenu");
const modalEliminar = new bootstrap.Modal(document.getElementById('modalEliminar'));

function cargarDatos(){
//"id":"174","nombre":"Progrmacion JR webgh","descripcion":"Para nuevos estudiantes","tiempo":"8"
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php")//la url de peticion 
    .then(respuesta => respuesta.json())//recibe los datos en json
    .then((datosrespuesta) => {
      //  console.log('datosrespuesta',datosrespuesta.data)
        settable(datosrespuesta.data)
    } )
    .catch(console.log)
}

function settable(data){
   // console.log('data',data);
   
    for (const valor of data) {
       // console.log('valor: ',valor);
        contenidoTablaResultado.innerHTML += 
                `<tr class="table-light" >
                        <td scope="row">${valor.id}</td>
                        <td>${valor.nombre}</td>
                        <td>${valor.descripcion}</td>
                        <td>${valor.tiempo}</td>
                        <td>${valor.usuario}</td>
                        <td>
                          <a name="" id="" class="btn btn-primary" href="#" role="button">Editar</a>
                          ||
                          <a name="" id="" class="btn btn-danger" role="button" onclick="funcioneliminar('${valor.id}')">Eliminar</a>
                        </td>
                    </tr>`;
    }
}

function funcioneliminar(id){
  modalEliminar.show();
  document.getElementById('resultadoId').innerHTML = id;
  document.getElementById('idEliminar').value = id;      
}

function eliminarId(){
  id = document.getElementById('idEliminar').value;

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
            completeDelete()
        })
        .catch(console.log)//muestra errores
}

function completeDelete(){
  modalEliminar.hide();
  contenidoTablaResultado.innerHTML = ``;
  cargarDatos();
}

cargarDatos();

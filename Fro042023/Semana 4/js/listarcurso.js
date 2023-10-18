
var calificaciones = document.querySelector('#calificaciones');
var url = "https://paginas-web-cr.com/ApiPHP/apis/";
var listar = "ListaCurso.php";
var eliminar = "BorrarCursos.php";
const myModal = new bootstrap.Modal(document.getElementById('modalId'));
const modalEditar = new bootstrap.Modal(document.getElementById('modalEditar'));
var registronotas =  document.getElementById('registronotas');

function cargardatos() {
    var urllistar = url + listar;
    //console.log(urllistar);

    fetch(urllistar)//solicitud a la url
    .then(repuesta => repuesta.json())//solicita que todo sea json
    .then((datosrepuesta) =>
        {
            pintandotabla(datosrepuesta.data)
        }
    )//los datos recibidos
    .catch(console.log);//los posibles errores
}

function pintandotabla(datos){
    //console.log("1" + datos)

    for (const registro of datos) {
        

        console.log(registro);
        //{id: '3688', nombre: 'Programacion 2', descripcion: 'web', tiempo: '10 meses', usuario: 'Arkin'}
        // <td class="table-dark" scope="row">${registro.id}</td>
        // <td>${registro.nombre}</td>
        // <td>${registro.descripcion}</td>
        // <td>${registro.tiempo}</td>
        // <td>${registro.usuario}</td>
       // if (datos.hasOwnProperty(registro)){

    // calificaciones.innerHTML +=
    // `<tr class="table-success">`;

    //     var columnas = '';

    //     for (const key in registro) {
    //         if (Object.hasOwnProperty.call(registro, key)) {
    //             const element = registro[key];
    //             columnas += `<td>${element}</td>`;
    //             console.log(element + " --- " + key);
    //         }
    //     }
        
    // calificaciones.innerHTML += columnas +
    // `</tr>`;

            // var valor = registro['id'];
            // console.log(registro+ ': --- ' + valor);
       // }


        calificaciones.innerHTML +=
        `<tr class="table-success">
            <td class="table-dark" scope="row">${registro.id}</td>
            <td>${registro.nombre}</td>
            <td>${registro.descripcion}</td>
            <td>${registro.tiempo}</td>
            <td>${registro.usuario}</td>
            <td class="table-secondary">
                <a onclick="editar('${registro.id}', '${registro.nombre}','${registro.descripcion}','${registro.tiempo}','${registro.usuario}')" name="" id="" class="btn btn-warning" href="#" role="button">Editar</a>
                ||
                <a onclick="mostraIdEliminar('${registro.id}')" name="" id="" class="btn btn-danger" href="#" role="button">Eliminar</a>
            </td>
        </tr>`;
    }
}

function mostraIdEliminar(id){   
    document.getElementById("idEliminar").value = id; 
    document.getElementById("idResultado").innerHTML = id; 
    myModal.show();
}

function eliminarId(){
    var id = document.getElementById("idEliminar").value;
    
    var urleliminar = url + eliminar;

    //Armo el arreglo
    var datosenviar =
        { 
            id:id 
        };

    fetch(urleliminar, 
        {
            method:'POST',
            body: JSON.stringify(datosenviar)
        })//solicitud a la url
    .then(repuesta => repuesta.json())//solicita que todo sea json
    .then((datosrepuesta) =>
        {
            console.log(datosrepuesta)
            recargarTabla()
        }
    )//los datos recibidos
    .catch(console.log);//los posibles errores
}

function recargarTabla(){
    myModal.hide();
    calificaciones.innerHTML = ``;
    cargardatos();
}

function editar(id, nombre, descripcion, tiempo, usuario){
    document.getElementById("ideditar").value = id;
    document.getElementById("nombre").value = nombre;
    document.getElementById("descripcion").value = descripcion;
    document.getElementById("tiempo").value = tiempo;

    modalEditar.show();
    //alert("editar");
}

registronotas.addEventListener('submit', function(e){
    e.preventDefault();
    alert("salvando");
        // var nombre = document.getElementById('nombre').value;
        // var descripcion = document.getElementById('descripcion').value;
        // var tiempo = document.getElementById('tiempo').value;
        // var usuario =  'Prof Mario';


        // var datos = {
        //     nombre: nombre,
        //     descripcion: descripcion,
        //     tiempo: tiempo,
        //     usuario: usuario
        // };

        // var urlinsertar = url + insertar;
        

        // fetch(urlinsertar,
        //     {
        //         method: "POST",
        //         body: JSON.stringify(datos)
        //     }
            
        //     )//solicitud a la url
        // .then(repuesta => repuesta.json())//solicita que todo sea json
        // .then((datosrepuesta) =>
        //     {
        //         console.log(datosrepuesta);
        //     }
        // )//los datos recibidos
        // .catch(console.log);//los posibles errores

    

        // alert("Salvando");

        // window.location = 'listarcurso.html';



    }

);

cargardatos();
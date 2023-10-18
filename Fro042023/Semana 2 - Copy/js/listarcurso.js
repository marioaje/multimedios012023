
var calificaciones = document.querySelector('#calificaciones');
var url = "https://paginas-web-cr.com/ApiPHP/apis/";
var listar = "ListaCurso.php";


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
                <a onclick="eliminar('${registro.id}')" name="" id="" class="btn btn-danger" href="#" role="button">Eliminar</a>
            </td>
        </tr>`;
    }
}

function eliminar(id){
    alert(id);
}

function editar(id, nombre, descripcion, tiempo, usuario){
    alert("editar");
}

cargardatos();
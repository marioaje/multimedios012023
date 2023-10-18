
var formulario = document.getElementById('formulario');
const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'));
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    nombre= document.getElementById('nombre').value;
    tiempo= document.getElementById('tiempo').value;
    descripcion= document.getElementById('descripcion').value;
    usuario= 'Mario Prof';
    nombre= document.getElementById('nombre').value;
    var datosEnviar = {
        nombre: nombre,
        tiempo: tiempo,
        descripcion: descripcion,
        usuario: usuario
    }
    //console.log (datosEnviar);

    fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarCursos.php",
        {
            method: "POST"   ,
            body: JSON.stringify(datosEnviar)
        }        
    )//la url de peticion 
    .then(respuesta => respuesta.json())//recibe los datos en json
    .then((datosrespuesta) => {
       // console.log('datosrespuesta',datosrespuesta.data)
        modalSuccess.show()
        setTimeout(completesave, 3000)
       
    } )
    .catch(console.log)
});

function completesave() {
    
    window.location ='listarcurso.html';
  }
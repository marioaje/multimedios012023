import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class CrearCurso extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        datosCargados:false,
        nombre:"",
        descripcion:"",
        tiempo:"",
        usuario:""
    } 
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    cambiovalor = (e)=>{
        const state = this.state;
        state[e.target.name]=e.target.value;
        this.setState({state});
    }

    enviarDatos = (e)=>{
        e.preventDefault();
        
        const {nombre, tiempo, descripcion } = this.state;
        var datosEnviar = {
            nombre: nombre,
            tiempo: tiempo,
            descripcion: descripcion,
            usuario: "Prof Mario VLA"
        }

        fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarCursos.php",
        {
            method: "POST"   ,
            body: JSON.stringify(datosEnviar)
        }        
        )//la url de peticion 
        .then(respuesta => respuesta.json())//recibe los datos en json
        .then((datosrespuesta) => {
           // console.log('datosrespuesta',datosrespuesta.data)
            this.setState ({datosCargados:true})
        } )
        .catch(console.log)
    }

    // handleClose() {                
    //     this.completesave();
    // }

    // completesave() {
    //     alert("exito")
    //     //window.location ='/ListarCurso';
    //   }


    render() { 
        const {
            datosCargados,
            nombre,
            descripcion,
            tiempo,
            usuario
        } = this.state;
        return (
            <div className="container">
                <h2>Crear Curso</h2>
                <form id="formulario" onSubmit={this.enviarDatos}>
                            <div className="mb-3">
                            <label for="" className="form-label">Nombre</label>
                            <input type="text" required
                                className="form-control" name="nombre" id="nombre" onChange={this.cambiovalor} aria-describedby="helpId" placeholder="Ingrese su nombre"></input>
                            <small id="helpId" className="form-text text-muted" >Ingrese su nombre</small>
                            </div>
                            <div className="mb-3">
                                <label for="" className="form-label">Descripcion</label>
                                <input type="text" required
                                className="form-control" onChange={this.cambiovalor} name="descripcion" id="descripcion" aria-describedby="helpId" placeholder="Ingrese su descripcion"></input>
                                <small id="helpId" className="form-text text-muted">Ingrese su descripcion</small>
                            </div>
                            <div className="mb-3">
                                <label for="" className="form-label">Tiempo</label>
                                <input type="text" required
                                className="form-control" onChange={this.cambiovalor} name="tiempo" id="tiempo" aria-describedby="helpId" placeholder="Ingrese el tiempo"></input>
                                <small id="helpId" className="form-text text-muted">Ingrese el tiempo</small>
                            </div>                          
                            <div className="mb-3">
                                <button type="reset" className="btn btn-danger">Reset</button>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>

                        
    <Modal show={datosCargados} >
      {/* <Modal show={show} onHide={handleClose}> */}
        <Modal.Header className='bg-success'>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" href='/ListarCurso' >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
            </div>

          );
    }
}
 
export default CrearCurso;

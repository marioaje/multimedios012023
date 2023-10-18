import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 

            <div>
                <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="https://paginas-web-cr.com/ApiPHP/" target="_blank">API</Nav.Link>
                        <NavDropdown title="Cursos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/ListarCurso">Listar</NavDropdown.Item>
                        <NavDropdown.Item href="/CrearCurso">
                            Crear
                        </NavDropdown.Item>                       
                        </NavDropdown>                        
                        <NavDropdown title="Estudiantes" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/ListarEstudiantes">Listar</NavDropdown.Item>
                        <NavDropdown.Item href="">
                            Crear
                        </NavDropdown.Item>                       
                        </NavDropdown>
                        <NavDropdown title="Profesores" id="basic-nav-dropdown">
                        <NavDropdown.Item href="">Listar</NavDropdown.Item>
                        <NavDropdown.Item href="">
                            Crear
                        </NavDropdown.Item>                       
                        </NavDropdown>
                        <NavDropdown title="Grupos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="">Listar</NavDropdown.Item>
                        <NavDropdown.Item href="">
                            Crear
                        </NavDropdown.Item>                       
                        </NavDropdown>
                        <NavDropdown title="Usuarios" id="basic-nav-dropdown">
                        <NavDropdown.Item href="">Listar</NavDropdown.Item>
                        <NavDropdown.Item href="">
                            Crear
                        </NavDropdown.Item>                       
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>

            </div>
            
         );
    }
}
 
export default Menu;
import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class MenuPrincipal extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        //     <Navbar expand="lg" className="bg-body-tertiary">
        //     <Container>
        //       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //       <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="me-auto">
        //           <Nav.Link href="#home">Home</Nav.Link>
        //           <Nav.Link href="#link">Link</Nav.Link>
        //           <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        //             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //             <NavDropdown.Item href="#action/3.2">
        //               Another action
        //             </NavDropdown.Item>
        //             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //             <NavDropdown.Divider />
        //             <NavDropdown.Item href="#action/3.4">
        //               Separated link
        //             </NavDropdown.Item>
        //           </NavDropdown>
        //         </Nav>
        //       </Navbar.Collapse>
        //     </Container>
        //   </Navbar>
            <div>
                 <ul className="nav nav-tabs" id="navId" role="tablist">
                     <li className="nav-item">
                        <a href="/" className="nav-link" data-bs-toggle="tab" aria-current="page">Home Page</a>
                    </li>   
                    <li className="nav-item">
                        <a href="/ListarCursos" className="nav-link" data-bs-toggle="tab" aria-current="page">Cursos</a>
                    </li>                    
                    <li className="nav-item">
                        <a href="/CrearCurso" className="nav-link" data-bs-toggle="tab">Crear Curso</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a href="#" className="nav-link disabled" data-bs-toggle="tab">Disabled</a>
                    </li>
                </ul>                
            </div>
         );
    }
}
 
export default MenuPrincipal;
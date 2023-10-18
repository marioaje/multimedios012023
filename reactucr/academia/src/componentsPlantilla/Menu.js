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
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="/ListarCurso">Listar Curso</Nav.Link>
                  <Nav.Link href="/CrearCurso">Crear Curso</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>              
            //  <div>
            //      <nav className="navbar navbar-expand navbar-light bg-light">
            //          <ul className="nav navbar-nav">
            //              <li className="nav-item">
            //                  <a className="nav-link active" href="#" aria-current="page">Nav 1 <span className="visually-hidden">(current)</span></a>
            //              </li>
            //              <li className="nav-item">
            //                  <a className="nav-link" href="#">Nav 2</a>
            //              </li>
            //          </ul>
            //      </nav>
            //  </div>
          );
    }
}
 
export default Menu;
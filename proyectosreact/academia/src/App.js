import './App.css';

import ListarCurso from './cursos/ListarCurso';
import CrearCurso from './cursos/CrearCurso';

import ListarGrupo from './grupos/ListarGrupo';
import ListarEstudiantes from './estudiantes/ListarEstudiantes';
import Menu from './plantilla/Menu';
import Home from './plantilla/Home';


import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Menu></Menu>      
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route path="/ListarCurso" component={ListarCurso}></Route>
        <Route path="/CrearCurso" component={CrearCurso}></Route>
        <Route path="/ListarGrupo" component={ListarGrupo}></Route>
        <Route path="/ListarEstudiantes" component={ListarEstudiantes}></Route>        
      </Router>
    </div>
  );
}

export default App;

import ListarCurso from './componentsCurso/listarCurso';
import CrearCurso from './componentsCurso/crearCurso';
import MenuPrincipal from './componentsPlantilla/Menu';
import Dashboard from './componentsPlantilla/Dashboard';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Route, BrowserRouter as  Router } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">       
      <MenuPrincipal></MenuPrincipal>
      <Router>
        <Route exact path="/" component={Dashboard}></Route>
        <Route path="/ListarCursos" component={ListarCurso}></Route>   
        <Route path="/CrearCurso" component={CrearCurso}></Route>             
      </Router>
    </div>
  );
}

export default App;

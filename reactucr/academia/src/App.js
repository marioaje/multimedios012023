import logo from './logo.svg';
import ListarCurso from './componentsCurso/ListarCurso';
import CrearCurso from './componentsCurso/CrearCurso';
import Menu from './componentsPlantilla/Menu';

import 'bootstrap/dist/css/bootstrap.css';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Menu></Menu>

      <Router>
        <Route exact path="/"></Route>
        <Route path="/ListarCurso" component={ListarCurso}></Route>
        <Route path="/CrearCurso" component={CrearCurso}></Route>
      </Router>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

var namepage = document.title;
var activepagelistarcurso = '';
var activepagelistarprofesor = '';
var activepagelistarestudiante = '';
var activepagelistargrupo = '';
var activepagelistarusuario = '';
var activepagehome = '';
var activepagelistargrupo = '';
var activecrearcurso = '';


// Seccion de listar
if ("Listar Curso" == namepage) {
    activepagelistarcurso = 'active';
}

if ("Listar Profesor" == namepage) {
    activepagelistarprofesor = 'active';
}

if ("Listar Grupo" == namepage) {
    activepagelistargrupo = 'active';
}

if ("Listar Estudiante" == namepage) {
    activepagelistarestudiante = 'active';
}

if ("Listar Usuario" == namepage) {
    activepagelistarusuario = 'active';
}

if ("Listar Grupo" == namepage) {
    activepagelistargrupo = 'active';
}

if ("Home" == namepage) {
    activepagehome = 'active';
}

if ("Crear Curso" == namepage) {
    activecrearcurso = 'active';
}


loadmenu.innerHTML +=
    `
<nav class="navbar navbar-expand-xxl navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Mario</a>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link ${activepagehome}" href="index.html" aria-current="page">Home <span class="visually-hidden">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://paginas-web-cr.com/ApiPHP/" target="_blank">Api Web</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle ${activepagelistarcurso}" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cursos</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <a class="dropdown-item ${activepagelistarcurso}" href="listarcurso.html">Listar</a>
                            <a class="dropdown-item ${activecrearcurso}" href="crearcursos.html">Crear</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle ${activepagelistarestudiante}" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Estudiantes</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <a class="dropdown-item ${activepagelistarestudiante}" href="listarestudiante.html">Listar</a>
                            <a class="dropdown-item" href="crearestudiante.html">Crear</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle ${activepagelistarprofesor}" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Profesor</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <a class="dropdown-item ${activepagelistarprofesor}" href="listarprofesor.html">Listar</a>
                            <a class="dropdown-item" href="#">Crear</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle ${activepagelistargrupo}" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Grupos</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <a class="dropdown-item ${activepagelistargrupo}" href="listargrupo.html">Listar</a>
                            <a class="dropdown-item" href="#">Crear</a>
                        </div>
                    </li>      
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle ${activepagelistarusuario}" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Usuarios</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <a class="dropdown-item ${activepagelistarusuario}" href="listarusuario.html">Listar</a>
                            <a class="dropdown-item" href="#">Crear</a>
                        </div>
                    </li>                                                                          
                </ul>                
            </div>
        </nav>`;
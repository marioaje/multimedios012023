import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EnlacesComponent } from './enlaces/enlaces.component'; // Asegúrate de importar el nuevo componente
import { PaginaVaciaComponent } from './pagina-vacia/pagina-vacia.component'; // Importa el nuevo componente
const routes: Routes = [
  { path: '', component: PaginaVaciaComponent }, 
  { path: 'enlaces', component: EnlacesComponent }, // Ruta del nuevo componente (grupo.component)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

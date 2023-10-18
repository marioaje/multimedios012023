import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { EnlacesComponent } from './enlaces/enlaces.component';
import { PaginaVaciaComponent } from './pagina-vacia/pagina-vacia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalSuccessComponent } from './modal-success/modal-success.component';

@NgModule({
  declarations: [
    AppComponent,
    EnlacesComponent,
    PaginaVaciaComponent,
    ModalSuccessComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()  //Agrega el modulo del modal por medio del import
  ],
  providers: [
    {
      provide: HttpHeaders,
      useValue: new HttpHeaders().set('Content-Type', 'application/json'),
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

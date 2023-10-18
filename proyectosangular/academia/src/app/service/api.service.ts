import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private uriApi = 'https://paginas-web-cr.com/ApiPHP/apis';

  constructor( private http: HttpClient ) { }

  cargarDatosCurso(): Observable<any>{    
    return this.http.get<any>(`${this.uriApi}/ListaCurso.php`);
  }

  insertarDatosCurso(curso: any): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': "application/json"
    });

    const url = 'https://paginas-web-cr.com/ApiPHP/apis/InsertarCursos.php';
    return this.http.post( url , curso, {headers} );
  }

}
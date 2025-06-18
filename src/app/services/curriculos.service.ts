import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curriculo } from '../models/curriculo.model';

@Injectable({
  providedIn: 'root',
})
export class CurriculosService {
  private apiUrl = 'http://localhost:3013/curriculos';

  constructor(private http: HttpClient) {}

  //& criar os métodos para a conexão com a apiREST

  //*   get - obter a lista de currículos
  getCurriculos(): Observable<Curriculo[]> {
    // observable -> rxjs => tradutor de json para typescript
    return this.http.get<Curriculo[]>(this.apiUrl);
  }

  //*   post
  postCurriculo(curriculo: Curriculo): Observable<Curriculo[]> {
    return this.http.post<Curriculo[]>(this.apiUrl, curriculo);
  }

  //*   put
  putCurriculo(id: any, curriculo: Curriculo): Observable<Curriculo[]> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Curriculo[]>(url, curriculo);
  }

  //*   delete
  deleteCurriculo(id: any): Observable<Curriculo[]> {
    const url = this.apiUrl + '/' + id;
    return this.http.delete<Curriculo[]>(url);
  }

  //*   getCurriculoById - obter currículo por id (extra)
  getCurriculoById(id: number): Observable<Curriculo> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Curriculo>(url);
  }
}

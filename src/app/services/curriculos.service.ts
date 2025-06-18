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

  getCurriculos(): Observable<Curriculo[]> {
      return this.http.get<Curriculo[]>(this.apiUrl); 
    }

  postCurriculo(curriculo: Curriculo): Observable<Curriculo[]> {
    return this.http.post<Curriculo[]>(this.apiUrl, curriculo);
  }

  putCurriculo(id: any, curriculo: Curriculo): Observable<Curriculo[]> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Curriculo[]>(url, curriculo);
  }

  deleteCurriculo(id: any): Observable<Curriculo[]> {
    const url = this.apiUrl + '/' + id;
    return this.http.delete<Curriculo[]>(url);
  }

  getCurriculoById(id: number): Observable<Curriculo> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Curriculo>(url);
  }
}

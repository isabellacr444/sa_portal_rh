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

  //*   get - obter a lista de curriculos
  getCurriculos(): Observable<Curriculo[]> {
      // observable -> rxjs => tradutor de json para typescript
      return this.http.get<Curriculo[]>(this.apiUrl); //conecta com a API para pegar os Dados
    }

  //*   post
  postCurriculo(curriculo: Curriculo): Observable<Curriculo[]> {
    return this.http.post<Curriculo[]>(this.apiUrl, curriculo);
  }

  //*   put
  // nomeDoMétodo(parâmetros - informações chamadas e usadas): retornoObservable de curriculo[] - coleção chave valor, para cada coisa existe um valor
  putCurriculo(id: any, curriculo: Curriculo): Observable<Curriculo[]> {
    const url = `${this.apiUrl}/${id}`; // construir a url join (apiUrl+id)
    return this.http.put<Curriculo[]>(url, curriculo);
  }

  //*   delete
  deleteCurriculo(id: any): Observable<Curriculo[]> {
    const url = this.apiUrl + '/' + id;
    return this.http.delete<Curriculo[]>(url);
  }

  getCurriculoById(id: number): Observable<Curriculo> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Curriculo>(url);
  }
}

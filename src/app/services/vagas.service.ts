import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from '../models/vaga.model';

@Injectable({
  providedIn: 'root',
})
export class VagasService {
  private apiUrl = 'http://localhost:3013/vagas';

  constructor(private http: HttpClient) {}

  //& criar os métodos para a conexão com a apiREST

  //*   get - obter a lista de vagas
  getVagas(): Observable<Vaga[]> {
    // observable -> rxjs => tradutor de json para typescript
    return this.http.get<Vaga[]>(this.apiUrl); //conecta com a API para pegar os Dados
  }

  //*   post
  postVaga(vaga: Vaga): Observable<Vaga[]> {
    return this.http.post<Vaga[]>(this.apiUrl, vaga);
  }

  //*   put
  // nomeDoMétodo(parâmetros - informações chamadas e usadas): retornoObservable de vaga[] - coleção chave valor, para cada coisa existe um valor
  putVaga(id: any, vaga: Vaga): Observable<Vaga[]> {
    const url = `${this.apiUrl}/${id}`; // construir a url join (apiUrl+id)
    return this.http.put<Vaga[]>(url, vaga);
  }

  //*   delete
  deleteVaga(id: any): Observable<Vaga[]> {
    const url = this.apiUrl + '/' + id;
    return this.http.delete<Vaga[]>(url);
  }
}

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ResponsePedido } from '../modelos/response-pedido'

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

   //URL_API = 'http://n3solucoes.zapto.org:9999/api/produtos';
   URL_API = 'http://localhost:27109/api/v1/produto';
   constructor(private http: HttpClient) { }
   httpOptions = {
     headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Basic my-auth-token' })
    }
    
    //pegaro todos os produtos
   getAllPedidos(): Observable<ResponsePedido>{
     return this.http.get<ResponsePedido>(this.URL_API).pipe(retry(2),catchError(this.handleError))
   }
   // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}

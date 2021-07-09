import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { RequestPedido } from '../modelos/request-pedido';
import { ResponsePedido } from '../modelos/response-pedido'

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  //URL_API = 'http://n3solucoes.zapto.org:9999/api/produtos';
  URL_API = 'http://localhost:27109/api/v1/pedido';
 // URL_API2 = 'http://localhost:27109/api/v1/ConsultaNfce/1';
  URL_API_C = 'http://localhost:27109/api/v1/ConsultaPedido/PesquisaPorData'
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'blob', 'Authorization': '96b4f8b9-91b7-4581-b200-4ae4dae2110e' })
  }

  //pegaro todos os pedidos
  getAllPedidos(): Observable<ResponsePedido> {
    return this.http.get<ResponsePedido>(this.URL_API).pipe(retry(2), catchError(this.handleError))
  }
  //getPedidosNfce(id: number): Observable<ResponsePedido> {
   // return this.http.get<ResponsePedido>(this.URL_API2).pipe(retry(2), catchError(this.handleError))
  //}
  //Enviar pedido para API
  sendPedido(request: RequestPedido): Observable<ResponsePedido> {
    return this.http.post<ResponsePedido>(this.URL_API, request);
  }
  getPedidosbyData(data: any)
  {
    return this.http.get<ResponsePedido>(this.URL_API_C + '/'+ data).pipe(retry(2), catchError(this.handleError))
  }
  getPDF(url: string) 
  {
    return this.http.get(url,this.httpOptions).pipe(retry(2), catchError(this.handleError))
   // window.open(url,'_blank')
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

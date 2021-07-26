import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { RequestPedido } from '../modelos/request-pedido';
import { ResponsePedido } from '../modelos/response-pedido'

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  URL_API = 'http://nota100.com.br/api/v1';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'x-api-key': '96b4f8b9-91b7-4581-b200-4ae4dae2110e' })
  }

  getAllPedidos(): Observable<ResponsePedido> {
    return this.http.get<ResponsePedido>(this.URL_API+'/'+'pedido').pipe(retry(2), catchError(this.handleError))
  }
  sendPedido(request: RequestPedido): Observable<ResponsePedido> {
    return this.http.post<ResponsePedido>(this.URL_API+'/'+'pedido', request);
  }
  getPedidosbyData(data: any)
  {
    return this.http.get<ResponsePedido>(this.URL_API+ '/'+'ConsultaPedido/PesquisaPorData'+'/'+ data).pipe(retry(2), catchError(this.handleError))
  }
  getPdfReport(url: string) 
  {
    const headers = new HttpHeaders().set('x-api-key', '96b4f8b9-91b7-4581-b200-4ae4dae2110e');
    return this.http.get(url,{headers, responseType: 'blob'}).pipe(
      map((res: any) => {
        return new Blob([res], { type: 'application/pdf' });
      })
    );
    
  }
  cancelarNota(url:string)
  {
    const headers = new HttpHeaders().set('x-api-key', '96b4f8b9-91b7-4581-b200-4ae4dae2110e');
    return this.http.post<ResponsePedido>(url,headers);
  }
  getXmlReport(url: string) 
  {
    const headers = new HttpHeaders().set('x-api-key', '96b4f8b9-91b7-4581-b200-4ae4dae2110e');
    return this.http.get(url,{headers, responseType: 'blob'}).pipe(
      map((res: any) => {
        return new Blob([res], { type: 'application/xml' });
      })
    );
    
  }
  checkNfc(id:string)
  {
    return this.http.get<any>(this.URL_API+ '/'+'v1/ConsultaPedido/PesquisaSituacaoPedido'+'/'+ id).pipe(retry(2), catchError(this.handleError))
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

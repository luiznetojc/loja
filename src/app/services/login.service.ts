import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLogin } from '../modelos/request-login';
import { Responselogin } from '../modelos/responselogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  Url = 'http://localhost:27109/api/v1/usuario/login';
  //Url = 'https://localhost:44366/Usuario/P';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer my-auth-token' })
   }
  doLogin(requestLogin: RequestLogin): Observable<Responselogin>
  {
    return this.httpClient.post<Responselogin>(this.Url,requestLogin);
  }
  dopost(requestLogin: RequestLogin): Observable<Responselogin>
  {
    return this.httpClient.post<Responselogin>('https://localhost:44366/Usuario/g',requestLogin.email);
  }
}

/* vai da run*/
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
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
  //httpOptions = {
  //  headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer my-auth-token' })
  // }

  async doLogin(requestLogin: RequestLogin) {
    const result = await this.httpClient.post<any>(this.Url, requestLogin).toPromise();
    if (result && result.tokenUsuarioLogado) {
      window.localStorage.setItem('token', result.tokenUsuarioLogado);
      window.localStorage.setItem('cpfUsuario', result.emailUsuarioLogado);
      return true;
    }
    return false;
  }
  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwtDecode(token);
    if (decoded.exp === undefined) {
      //return null;
    }
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }
  isTokenExpired(token: string): boolean {
    if (!token) {
      return true;
    }
    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }
    return !(date.valueOf() > new Date().valueOf());
  }
  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    }
    else if (this.isTokenExpired(token)) {
      return false;
    }
    return true;
  }
  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }
  dopost(requestLogin: RequestLogin): Observable<Responselogin> {
    return this.httpClient.post<Responselogin>('https://localhost:44366/Usuario/g', requestLogin.email);
  }
}

/* vai da run*/
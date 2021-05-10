import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestLogin } from '../modelos/request-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  Url = 'https://root';
  doLogin(requestLogin: RequestLogin)
  {
    return this.httpClient.post(this.Url,requestLogin);
  }
}

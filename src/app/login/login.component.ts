import { Component, OnInit } from '@angular/core';
import { RequestLogin } from '../modelos/request-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  requestLogin = {} as RequestLogin;
  constructor() { }

  ngOnInit(): void {

  }
  public doLogin(): void{
    console.log(this.requestLogin);
  }

}

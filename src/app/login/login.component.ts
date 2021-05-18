import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { observable } from 'rxjs';
import { RequestLogin } from '../modelos/request-login';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  requestLogin = {} as RequestLogin;
  result!: Observable<any>;
  constructor(private LoginSvc: LoginService) { }

  ngOnInit(): void {

  }
  public doLogin(): void{
    this.LoginSvc.doLogin(this.requestLogin).subscribe(accept =>(console.log(accept)),error =>(console.error(error)));
    //this.LoginSvc.dopost(this.requestLogin).subscribe(accept =>(console.log(accept)),error =>(console.error(error)));
    console.log(this.result);
  }

}

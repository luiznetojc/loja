import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RequestLogin } from '../../modelos/request-login';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  requestLogin = {} as RequestLogin;
  result!: Observable<any>;
  constructor(private LoginSvc: LoginService, private router: Router) { }

  ngOnInit(): void {

  }
  async doLogin() {
    try {
      const result = await this.LoginSvc.doLogin(this.requestLogin);
      console.log(this.result);
      this.router.navigate(['']);
    } catch (error) {
      console.error(error);
    }
    //this.LoginSvc.dopost(this.requestLogin).subscribe(accept =>(console.log(accept)),error =>(console.error(error)));
  }

}

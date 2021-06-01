import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  requestLogin = new RequestLogin("1", "1");
  result!: Observable<any>;
  formBuilder!: FormBuilder;
  constructor(private LoginSvc: LoginService, private router: Router) { }
  public userForm!: FormGroup;
  public notFounded = true;
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      senha: [null, [Validators.required, Validators.minLength(6)]],
      email: [null, [Validators.required, Validators.email]]
    });
  }
  get f() {
    return this.userForm.controls;
  }
  async doLogin() {
    try {
      const result = await this.LoginSvc.doLogin(this.requestLogin);
      console.log(this.result);
      this.notFounded = true;
      this.router.navigate(['']);
    } catch (error) {
      this.notFounded = false;
      console.error(error);
    }
    //this.LoginSvc.dopost(this.requestLogin).subscribe(accept =>(console.log(accept)),error =>(console.error(error)));
  }

}

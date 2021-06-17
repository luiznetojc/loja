import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private LoginSvc: LoginService) { }

  ngOnInit(): void {
  }
  goToPedidos(): void {
    this.router.navigate(['pedidos'])
  }
  goToPedidoslist(): void {
    this.router.navigate(['pedidoslist'])
  }
  logout(): void {
    this.LoginSvc.removeAuthorizationToken();
    this.router.navigate(['login'])

  }

}

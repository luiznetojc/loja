import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToPedidos(): void {
    this.router.navigate(['pedidos'])
  }
  goToPedidoslist(): void {
    this.router.navigate(['pedidoslist'])
  }
  goToCadastro(): void {
    this.router.navigate(['cadastro'])
  }

}

import { Component } from '@angular/core';
import { ProdutosService } from './services/produtos.service';
import { Observable } from 'rxjs';
import { Produtos } from './modelos/produtos'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loja';
  constructor() {}
    allProdutos!: Observable<any>; 
    produto = {} as Produtos;
  ngOnInit(): void {

  }
 
}

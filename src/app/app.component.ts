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
  constructor(private produtosSvc: ProdutosService) {}
    allProdutos!: Observable<any>; 
    produto = {} as Produtos;
  ngOnInit(): void {
    this.getAllProdutos();
  }
  getAllProdutos()
  {
    this.allProdutos = this.produtosSvc.getAllProdutos();
  }
  saveProduto(form: NgForm) {
    if (this.produto.produto_id !== undefined) {
      this.produtosSvc.updateProduto(this.produto).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.produtosSvc.saveProduto(this.produto).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }
  deleteProduto(produto: Produtos) {
    this.produtosSvc.deleteProduto(produto).subscribe(() => {
      this.getAllProdutos();
    });
  }

  // copia o carro para ser editado.
  editProduto(produto: Produtos) {
    this.produto = { ...produto };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getAllProdutos();
    form.resetForm();
    this.produto = {} as Produtos;
  }
}

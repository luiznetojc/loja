import { Component, OnInit } from '@angular/core';

import { ProdutosService } from '../../services/produtos.service';
import { Observable } from 'rxjs';
import { Produtos } from '../../modelos/produtos'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  filter!: string;
  title = 'loja';
  constructor(private produtosSvc: ProdutosService) { }
  allProdutos!: Observable<any>;
  selecaoProdutos!: Array<Produtos>;
  produto = {} as Produtos;
  ngOnInit(): void {
    this.getAllProdutos();
  }
  getAllProdutos() {
    this.allProdutos = this.produtosSvc.getAllProdutos();
  }
  saveProduto(form: NgForm) {
    if (this.produto.idproduto !== undefined) {
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

  // copia o produtos  para ser editado.
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

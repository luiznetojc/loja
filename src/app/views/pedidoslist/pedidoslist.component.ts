import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePedido } from 'src/app/modelos/response-pedido';
import { PedidosService } from 'src/app/services/pedidos.service';
import {formatDate } from '@angular/common';
import { ProdutosService } from 'src/app/services/produtos.service';
@Component({
  selector: 'app-pedidoslist',
  templateUrl: './pedidoslist.component.html',
  styleUrls: ['./pedidoslist.component.css']
})
export class PedidoslistComponent implements OnInit {

  constructor(private pedidosSvc: PedidosService,private ProdutosSvc: ProdutosService) { }
  allPedidos!: Observable<any>;
  allProdutos!: Observable<any>;
  id = 1;
  ngOnInit(): void {

   this.searchPedido();

  }
  cancelarNota(url:string)
  {

  }
  getPDF(url: string)
  {
    var res = this.pedidosSvc.getPdfReport(url);
    res.subscribe( res => {
    const fileURL = URL.createObjectURL(res);
    window.open(fileURL, '_blank');
    })
  }
  getXML(url: string)
  {
    
  }
  data = new Date();
  dataString = "";
  formatDate(data: string)
  {
    data = formatDate(this.data, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    return data;
  }
  formatDatePedidos()
  {
    this.allPedidos.forEach(data =>
      {
        data.data_pedido = this.formatDate(data.data_pedido);
      } )
  }
  searchProdutobyId(id: string)
  {
    this.allProdutos = this.ProdutosSvc.getProdutosById(id);
  }
  searchPedido()
  {
    this.dataString = this.formatDate(this.dataString);
    //this.allPedidos = this.pedidosSvc.getPedidosbyData(this.dataString.substring(0,10));
    this.allPedidos = this.pedidosSvc.getPedidosbyData("17-05-2021");
    this.formatDatePedidos();
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePedido } from 'src/app/modelos/response-pedido';
import { PedidosService } from 'src/app/services/pedidos.service';
import {formatDate } from '@angular/common';
@Component({
  selector: 'app-pedidoslist',
  templateUrl: './pedidoslist.component.html',
  styleUrls: ['./pedidoslist.component.css']
})
export class PedidoslistComponent implements OnInit {

  constructor(private pedidosSvc: PedidosService) { }
  //allPedidos!: Promise<any>;
  allPedidos!: Observable<any>;
  id = 1;
  ngOnInit(): void {
   // this.getAllPedidos();
   this.formatDatetoSend();
   this.searchPedido();

  }
  //getAllPedidos() {
   // this.pedidosSvc.getPedidosNfce(this.id).subscribe((response: ResponsePedido) => {
     // this.Pedidos = response;
   // });
   // console.log();
  //}
 
  getPDF(url: string)
  {
    this.pedidosSvc.getPDF(url).subscribe((res:any)=> console.log(res));
  }
  getXML()
  {
    
  }
  data = new Date();
  dataString = "";
  formatDatetoSend()
  {
    this.dataString = formatDate(this.data, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
  }
  searchPedido()
  {
    this.formatDatetoSend();
    console.log(this.dataString.substring(0,10));
    this.allPedidos = this.pedidosSvc.getPedidosbyData(this.dataString.substring(0,10));
  }

}

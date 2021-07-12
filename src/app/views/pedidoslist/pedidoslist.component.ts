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
  allPedidos!: Observable<any>;
  id = 1;
  ngOnInit(): void {

   this.formatDatetoSend();
   this.searchPedido();

  }

  getPDF(url: string)
  {
  var res = this.pedidosSvc.getPdfReport(url);
  res.subscribe( res => {
    const fileURL = URL.createObjectURL(res);
    window.open(fileURL, '_blank');
    })
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
    this.allPedidos = this.pedidosSvc.getPedidosbyData(this.dataString.substring(0,10));

  }

}

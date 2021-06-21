import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePedido } from 'src/app/modelos/response-pedido';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pedidoslist',
  templateUrl: './pedidoslist.component.html',
  styleUrls: ['./pedidoslist.component.css']
})
export class PedidoslistComponent implements OnInit {

  constructor(private pedidosSvc: PedidosService) { }
  allPedidos!: Promise<any>;
  Pedidos!: ResponsePedido;
  id = 1;
  ngOnInit(): void {
    this.getAllPedidos();
  }
  getAllPedidos() {
    this.pedidosSvc.getPedidosNfce(this.id).subscribe((response: ResponsePedido) => {
      this.Pedidos = response;
    });
    console.log();
  }

}

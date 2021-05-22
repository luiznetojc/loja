import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Observable } from 'rxjs';
import { IncluiPedidoItem } from 'src/app/modelos/inclui-pedido-item';
import { Produtos } from 'src/app/modelos/produtos';
import { RequestPedido } from 'src/app/modelos/request-pedido';
import { PedidosService } from 'src/app/services/pedidos.service';
import { ProdutosService } from 'src/app/services/produtos.service';



@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  request = {}as  RequestPedido;
  selecaoProdutos = Array<IncluiPedidoItem>(); 
  constructor(private produtosSvc: ProdutosService, private PedidosSvc: PedidosService) {
    this.cont = 0;
    this.qtd = 0;
  }
  allProdutos!: Observable<any>; 
  aProdutos!: Observable<any>; 
  temp = {} as IncluiPedidoItem;
  cont = {} as number;
  qtd = {} as number;
  //produto = {} as Produtos;
ngOnInit(): void {
  this.getAllProdutos();
}
getAllProdutos()
{
  this.allProdutos = this.produtosSvc.getAllProdutos();
}
selectProduto(produto: Produtos,qtd: number)
{
  this.temp = {} as IncluiPedidoItem;
  this.cont +=1;
  this.temp.idproduto = produto.produto_id;
  this.temp.idpedido_item = this.cont;
  this.temp.descricao_produto = produto.descricao_produto;
  this.temp.ncm_produto = produto.ncm_produto;
  this.temp.quantidade_item = qtd;
  this.temp.preco_item = produto.preco_venda;
  this.request.pedido_item.push(this.temp);
  this.calculapreco(produto,0);

}
calculapreco(produto:Produtos,verify: number)// verify usado para dar desconto no preco total caso opçao 1 selecionada
{
  if(verify == 0) 
  {
    this.request.valor_pedido += produto.preco_venda - (0);//desconto
  }
  else if(verify==1)
  {
    this.request.valor_pedido -= produto.preco_venda -(0);//desconto
  }
}
sendPedidos()
{
  for (let i = 0; i < this.selecaoProdutos.length; i++) {
    this.request.pedido_item.push(this.selecaoProdutos[i]);
  }
  this.request.cpf = "09042699493";
  this.request.data_pedido ="05042"
}
deleteProduto(produto:IncluiPedidoItem)
{
  this.selecaoProdutos.forEach((element,index)=>{
    if(element.idpedido_item==produto.idpedido_item) 
      this.selecaoProdutos.splice(index,1);
 });
 this.cont -=1;
}

}

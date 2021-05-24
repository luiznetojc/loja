import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PedidoItem } from 'src/app/modelos/pedido-item';
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
  request = new RequestPedido(0, "", "", 0, 0, [{
    idpedido_item: 0,
    idpedido: 0,
    idproduto: 0,
    descricao_produto: "",
    unidade_medida: "",
    ncm_produto: "",
    preco_item: 0,
    preco_desconto_item: 0,
    quantidade_item: 0
  }]);
  selecaoProdutos = Array<PedidoItem>();
  constructor(private produtosSvc: ProdutosService, private PedidosSvc: PedidosService) {
    this.cont = 0;
    this.qtd = 1;
  }
  allProdutos!: Observable<any>;
  allPedidos!: Observable<any>;
  temp = {} as PedidoItem;
  cont = {} as number;
  qtd = {} as number;
  ngOnInit(): void {
    this.getAllProdutos();
    this.getAllPedidos();
    this.request.pedido_item.pop();//remove valor de inicialização
  }
  getAllPedidos() {
    this.allPedidos = this.PedidosSvc.getAllPedidos();
  }
  getAllProdutos() {
    this.allProdutos = this.produtosSvc.getAllProdutos();
  }
  selectProduto(produto: Produtos, qtd: number) {
    this.cont += 1;
    this.temp = {} as PedidoItem;
    this.temp.idproduto = produto.produto_id;
    this.temp.idpedido_item = this.cont;
    this.temp.descricao_produto = produto.descricao_produto;
    this.temp.ncm_produto = produto.ncm_produto;
    this.temp.quantidade_item = qtd;
    this.temp.preco_item = produto.preco_venda;
    this.request.pedido_item.push(this.temp);
    this.addPreco(produto);
    this.data();

  }

  addPreco(produto: Produtos)// verify usado para dar desconto no preco total caso opçao 1 selecionada
  {
   this.request.valor_pedido += (produto.preco_venda)*this.qtd - (0);//desconto 

  }
  erasePreco(produto:PedidoItem){
    this.request.valor_pedido -= (produto.preco_item)*produto.quantidade_item - (0);//desconto
  }
  sendPedidos() {
    this.request.cpf = "0904269";
    this.request.data_pedido = Date.now().toString();
    this.PedidosSvc.sendPedido(this.request);
  }
  data()
  {
    var today = new Date();
    console.log(today.getDate.toString());

  }
  deleteProduto(produto: PedidoItem) {
    this.erasePreco(produto);
    this.request.pedido_item.forEach((element, index) => {
      if (element.idpedido_item == produto.idpedido_item)
        this.request.pedido_item.splice(index, 1);
    });
    this.cont -= 1;
  }

}

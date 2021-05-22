export interface RequestPedido {
    idpedido : number,
    cpf : string,
    data_pedido : string,
    valor_pedido : number,
    valor_desconto: number,
    pedido_item :
    [
        {
            idpedido_item: number,
            idpedido: number,
            idproduto: number,
            descricao_produto: string,
            unidade_medida: string,
            ncm_produto: string,
            preco_item: number,
            preco_desconto_item: number,
            quantidade_item: number
        }
    ]
}

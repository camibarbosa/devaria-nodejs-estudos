/*Desafio:
Escrever um programa que recebe alguns produtos como argumento, validar se esses produtos estão na lista de itens disponíveis do mercado, caso estejam, avisar o usuário quais produtos tem e não tem e, por último, exibir a lista de produtoa disponíveis ordenados por ordema alfabética do mercado para que o usuário possa pedir na próxima vez.
*/

try {
    const listaProdutosDisponiveis = [
        'Cafe',
        'Pao',
        'Arroz',
        'Macarrao',
        'Sabao',
        'Leite',
        'Feijao',
        'Carne',
    ];
    
    const listaArgumentos = process.argv.slice(2);

    const listaProdutosSolicitadoDisponiveis = listaProdutosDisponiveis.filter(produto => {
        return listaArgumentos.find(argumento => argumento === produto);
    });
    listaProdutosSolicitadoDisponiveis.forEach(produto => console.log(`Este produto esta disponivel: ${produto}`));

    const listaProdutosSolicitadoNaoDisponiveis = listaArgumentos.filter(argumento => {
        return !listaProdutosDisponiveis.find(produto => produto === argumeto);
    })
    listaProdutosSolicitadoNaoDisponiveis.forEach(argumento => console.log(`Este produto nao esta disponivel: ${argumento}`));

    listaProdutosDisponiveis.sort();
    listaProdutosDisponiveis.forEach(produto => console.log(`Produtos disponiveis: ${produto}`));

} catch(e) {
    console.log('Nao foi possivel realizar pedido de compra.');
}
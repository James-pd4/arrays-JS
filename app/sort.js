const ordenarPorPreco = document.getElementById('btnOrdenarPorPreco')

ordenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    const livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)

    console.log(livrosOrdenados)

    exibirOsLivrosNatela(livrosOrdenados)
}
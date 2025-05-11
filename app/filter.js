const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value

    let livrosFiltrados = categoria == 'disponivel'
        ? livros.filter(livro => livro.quandade > 0)
        : livros.filter(livro => livro.categoria == categoria)

    exibirOsLivrosNatela(livrosFiltrados)

}
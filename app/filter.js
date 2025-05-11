const botoes = document.querySelectorAll('.btn')
<<<<<<< HEAD
=======

>>>>>>> metodo_filter
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
<<<<<<< HEAD
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
=======
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quandade > 0) : livros.filter(livro => livro.categoria == categoria)

    exibirOsLivrosNatela(livrosFiltrados)
>>>>>>> metodo_filter
}
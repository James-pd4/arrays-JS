let livros = []

const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

const elementoParaInserirLivros = document.getElementById('livros');

getBuscaLivroDaAPI()

async  function getBuscaLivroDaAPI(){
    const res = await fetch(endpointDaAPI)
    console.log(res)

    livros = await res.json()

    //exibirlivros(livros)

    exibirlivros(precosComDescontos(livros))

}

function  exibirlivros(listaDeLivros){
    listaDeLivros.forEach(livro => {
        const livroDiv = `<div class="livro">
          <img src="${livro.imagem}" alt="${livro.titulo}">
          <h2>${livro.titulo}</h2>
          <p>Autor: ${livro.autor}</p>
          <p>Preço: R$${livro.preco}</p>
          <p>Categoria: ${livro.categoria}</p>
        </div>`;
        elementoParaInserirLivros.innerHTML += livroDiv;
    })
}


const precosComDescontos = function (livros){
   const precosAtual = livros.map(livro => (
        {...livro, preco: livro.preco * 0.8  }
    ))

    return precosAtual
}
let livros = []

const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscaLivroDaAPI()

async  function getBuscaLivroDaAPI(){
    const res = await fetch(endpointDaAPI)
    console.log(res)

    livros = await res.json()

    console.table(livros)

    console.log(livros)

}
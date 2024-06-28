function exibirOsLivrosNaTela(listaDeLivros) {
    listaDeLivros.forEach(livro => {
        let disponibilidade = livro.quantidade > 0 ? 'livro__disponivel' : 'livro_indisponivel'
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
            <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}">
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
            <div classe="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    })
}
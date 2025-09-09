'use strict'

const botaoBuscar = document.getElementById('buscar')
botaoBuscar.addEventListener('click', botaoSearch)

// A linha vai demorar um tempo diferente (async), sem esse todas as linhas andam em um mesmo tempo 
async function buscarImagens(raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`
    //Antes de passar pr alinha 6 aguarde a resposta 
    const response = await fetch(url)
    const imagens = await response.json()
    console.log(imagens.message)
    //Imagens é o array dessa função 
    return imagens.message

}

async function botaoSearch(){
    const cachorro = document.getElementById('input').value
    const imagens = await buscarImagens(cachorro)
    const main = document.getElementById('image')
    main.textContent = ''
    imagens.forEach((url) => {
        const img = document.createElement('img')
        img.src = url

        main.appendChild(img)
        
    })
}
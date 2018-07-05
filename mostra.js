function mostra(mensagem, classe = ""){
    var tag = document.createElement("p")
    tag.innerHTML = mensagem
    tag.classList.add(classe)
    document.body.appendChild(tag)
}
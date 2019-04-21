function navegarViaAjax(url, seletor){
    if (!url || !seletor) return

    const elemento = document.querySelector(seletor)
    fetch(url)
        .then(resp => resp.text())
        .then(html => {
            elemento.innerHTML = html 
        })
}

document.querySelectorAll('[wm-link]').forEach(link => {
    const url = link.attributes['wm-link'].value
    const seletorDestino = link.attributes['wm-destino'].value

    link.onclick = e =>{
        e.preventDefault()
        navegarViaAjax(url, seletorDestino)
    }
})
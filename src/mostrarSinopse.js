export class Card {
    constructor(sinopse) {
        this.sinopse = sinopse;
    }

mostrarSinopse() {
    return `<div class = "capaFilme">
    <img src="${this.sinopse.imagem}">
</div>
<div class = "resumoFilme">
    ${this.sinopse.descricao}
    <br>
    <br>
    <br>
    <a href="${this.sinopse.yt}"
            target="_blank">Veja o trailer</a>
    <br>
    <a href="${this.sinopse.imdb}"
            target="_blank">IMDB</a>
    <br>
    <br>
</div>
</div>`
}
}
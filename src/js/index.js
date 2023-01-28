const botaoResumo = document.querySelector(".botao-resumo")
const modal = document.querySelector(".modal")
const videoOp = document.getElementById("video")
const fecharModal = document.querySelector(".fechar-modal")

function alternarModal(){modal.classList.toggle("aberto")}

botaoResumo.addEventListener("click", () => {
    console.log("clicou")
    alternarModal()
    videoOp.setAttribute("src", "https://www.youtube.com/embed/wDHh14d-plI")
})

fecharModal.addEventListener("click", () => {
    alternarModal()
    videoOp.setAttribute("src", "")
})
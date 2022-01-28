// Pegando botao do HTML
const meuBotao_1 = document.getElementById("incluirExterno")

// Adicionando um evento ao Botão
meuBotao_1.addEventListener("click", dispararAlert)

// Função efetuando algo
function dispararAlert() {
    alert("Olá javascript externo!")
}
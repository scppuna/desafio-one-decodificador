function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
   // responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });

}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Mensagem Criptografada');
}

exibirMensagemInicial();
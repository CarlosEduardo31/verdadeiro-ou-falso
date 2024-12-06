document.getElementById('botao-carregar').addEventListener('click', carregarBateria);

let corTela = '';
let nivelBateria = 0;

function carregarBateria() {
    nivelBateria = Math.floor(Math.random() * 101);  // Valor aleatório entre 0 e 100
    const nivelElemento = document.getElementById('nivel-bateria');
    const corElemento = document.getElementById('cor-tela');

    // Ajustando a cor da bateria
    if (nivelBateria <= 20) {
        nivelElemento.style.backgroundColor = 'red';
    } else if (nivelBateria <= 50) {
        nivelElemento.style.backgroundColor = 'orange';
    } else {
        nivelElemento.style.backgroundColor = 'green';
    }

    nivelElemento.style.width = `${nivelBateria}%`;

    // Alterando a cor da tela
    const cores = ['verde', 'vermelho', 'azul', 'branco', 'amarelo'];
    corTela = cores[Math.floor(Math.random() * cores.length)];
    corElemento.style.backgroundColor = corTela;
}

document.querySelectorAll('.cor-opcao').forEach((button) => {
    button.addEventListener('click', verificarCor);
});

function verificarCor(event) {
    const corEscolhida = event.target.getAttribute('data-cor');
    const resultadoElemento = document.getElementById('mensagem-resultado');

    if (corEscolhida === corTela) {
        resultadoElemento.textContent = 'Cor correta! Parabéns!';
        resultadoElemento.style.color = 'green';
    } else {
        resultadoElemento.textContent = 'Cor incorreta! Tente novamente.';
        resultadoElemento.style.color = 'red';
    }
}

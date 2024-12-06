const situacoes = [
  { 
    imagem: "fone.jpg", 
    frase: "O fone está quebrado.", 
    correto: false 
  },
  { 
    imagem: "mouse.jpg", 
    frase: "O mouse não está quebrado.", 
    correto: true 
  },
  { 
    imagem: "cabo.png", 
    frase: "O cabo está danificado.", 
    correto: true 
  },
];

let rodadaAtual = 0;
let respostasCorretas = 0; // Contador de acertos
let mensagem = document.getElementById("mensagem-fim");

function carregarRodada() {
  if (rodadaAtual >= situacoes.length) {
    finalizarJogo();
    return;
  }
  const situacaoAtual = situacoes[rodadaAtual];
  document.getElementById("imagem-situacao").src = `${situacaoAtual.imagem}`;
  document.getElementById("frase-situacao").textContent = situacaoAtual.frase;
  document.getElementById("contador-rodada").textContent = `Rodada: ${rodadaAtual + 1}/3`;

  // Habilitar os botões no início de cada rodada
  document.getElementById("botao-verdadeiro").disabled = false;
  document.getElementById("botao-falso").disabled = false;
}

function verificarResposta(respostaUsuario) {
  const situacaoAtual = situacoes[rodadaAtual];
  
  // Desabilitar os botões para impedir múltiplos cliques
  document.getElementById("botao-verdadeiro").disabled = true;
  document.getElementById("botao-falso").disabled = true;
  
  // Verifica se a resposta do usuário está correta
  if (situacaoAtual.correto === respostaUsuario) {
    respostasCorretas++;
  } else {
    // Aqui você pode adicionar lógica para contar os erros ou exibir mensagens de erro
  }

  rodadaAtual++;

  setTimeout(() => {
    carregarRodada();
  }, 1000);
}

function finalizarJogo() {
  // Atualiza a mensagem de fim de jogo com base nos acertos
  if (respostasCorretas === 3) {
    mensagem.textContent = "O código da sua atividade é 03";
    mensagem.style.color = 'green';
  } else {
    mensagem.textContent = "O código da sua atividade é 05";
    mensagem.style.color = 'red';
  }
}

// Event listeners para os botões
document.getElementById("botao-verdadeiro").addEventListener("click", () => verificarResposta(true));
document.getElementById("botao-falso").addEventListener("click", () => verificarResposta(false));

// Inicializa a primeira rodada
carregarRodada();

let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirTextosIniciais() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirTextosIniciais();

function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Parabéns!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemSucesso = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela("p", mensagemSucesso);
    document.getElementById("reiniciar").removeAttribute("disabled");
    document.querySelector("button").setAttribute("disabled", true);
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor.");
    } else {
      exibirTextoNaTela("p", "O número secreto é maior");
    }
    tentativas++;
    limparCampoNumero();
  }
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampoNumero();
  tentativas = 1;
  exibirTextosIniciais();
  document.getElementById("reiniciar").setAttribute("disabled", true);
  document.querySelector("button").removeAttribute("disabled");
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroMaximo) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function limparCampoNumero() {
  chute = document.querySelector("input");
  chute.value = "";
}

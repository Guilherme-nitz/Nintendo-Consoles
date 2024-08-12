const botoesCarrossel = document.querySelectorAll(".botao");
botoesCarrossel.forEach((botao, indice) => {
  const imagens = document.querySelectorAll(".imagem");
  botao.addEventListener("click", () => {
    const botaoSelecionado = document.querySelector(".selecionado");

    botaoSelecionado.classList.remove("selecionado");

    botao.classList.add("selecionado");

    const imagemAtiva = document.querySelector(".ativa");

    imagemAtiva.classList.remove("ativa");

    imagens[indice].classList.add("ativa");
    const informacaoAtiva = document.querySelector(".informacoes.ativa");
    informacaoAtiva.classList.remove("ativa");
    const informacao=document.querySelectorAll(".informacoes");
    informacao[indice].classList.add("ativa");
  });
});

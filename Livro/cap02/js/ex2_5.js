// cria referência ao form e aos elementos de resposta (pelo seu ID)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado.
frm.addEventListener("submit", (e) => {
  const remedio = frm.inRemedio.value // Obtém o conteúdo dos campos
  const preco = Number(frm.inPreco.value.replace(",", "."))

  const dobro = preco * 2 // Calcula valor do prato vezes dois
  const desconto = Math.floor(dobro) // Arredondo para baixo

  resp1.innerText = `Promoção de ${remedio}` // exibe nome do medicamento
  resp2.innerText = `Leve 2 por apenas R$: ${desconto.toFixed(2)}`

  e.preventDefault()  // evita envio do form
})
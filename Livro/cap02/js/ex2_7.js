// cria referência ao form e aos elementos de resposta (pelo seu ID)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado.
frm.addEventListener("submit", (e) => {
  const produt = frm.inProdut.value 
  const preco = Number(frm.inPreco.value.replace(",", "."))

  const um = preco * 1 / 2
  
  const dois = preco * 2
  
  const total = um + dois
  

  resp1.innerText = `${produt} - Promoção: Leve 3 por ${total.toFixed(2)}`
  resp2.innerText = `O 3º produto custa apenas R$: ${um.toFixed(2)}`
  
  e.preventDefault()  // evita envio do form
})
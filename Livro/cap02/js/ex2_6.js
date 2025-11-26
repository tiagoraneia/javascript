// cria referência ao form e aos elementos de resposta (pelo seu ID)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado.
frm.addEventListener("submit", (e) => {
  const uso = Number(frm.inMinUso.value.replace(",", ".")) 
  const tempo = Number(frm.inTempoUso.value.replace(",", "."))

  const rest = tempo / 15 // Divide o tempo por 15 minutos
  
  const total = Math.ceil(rest) // Arredonda para um numero inteiro
  
  const valor = total * uso // calcula o valor total de uso
  

  resp.innerText = `Valor a Pagar R$: ${valor.toFixed(2)}` 
  
  e.preventDefault()  // evita envio do form
})
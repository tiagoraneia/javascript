const input = document.querySelector("input")

// Keydown - quando uma tecla é pressionada (captura tudo, incluind CRTL, SHIFT, etc...)
/*input.addEventListener("keydown", (event) => {
  console.log(event.key)
}) */

//  keypress - dispara quando uma tecla do tipo caractere é pressionada (letras, números, pontos, etc.)
input.addEventListener("keypress", (event) =>{
  console.log(event.key)
})


input.onchange = () => {
  inputChange()
}

function inputChange () {
  console.log("O INPUT MUDOU!")
}
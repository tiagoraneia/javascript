// Escopo de Função

showMessage("Olá, Rodrigo!")

function showMessage(message){
  console.log(message)
  endLine()

  function endLine() {
    console.log("--------------")
  }
}

showMessage("Tudo bem?")

// Não existe nmesse escopo.
endLine()
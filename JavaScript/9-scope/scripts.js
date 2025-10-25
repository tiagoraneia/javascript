
// Escopo global: essa variável pode ser acessada em qualquer lugar do código.
var email = 'joao@email.com'

{
  // Escopo de bloco: apesar de estar dentro de chaves,
  // 'var' não respeita o escopo de bloco, então 'email' pode ser usado aqui.
  console.log(email) // Vai mostrar: joao@email.com
}



{
  // Aqui estamos declarando uma variável com 'var' dentro de um bloco.
  var age = 18
}

// Como 'var' não fica presa ao escopo do bloco, podemos acessar 'age' fora do bloco.
console.log(age)


// Agora declaramos uma variável com 'let' no escopo global:
let address = "Rua X"

{
   // Tentando acessar 'address' aqui:
  console.log(address) // Aqui FUNCIONA, pois address foi criada no escopo global.
}
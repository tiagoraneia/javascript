// Letras maiúsculas e minúsculas fazem diferença.
// Case Sensitive.
// Nesse exemplo, as duas formas são aceitas.

let username = "Rodrigo"
let userName = "João"

console.log(username)
console.log(userName)

// Podemos iniciar uma variável com caracteres especiais:
let $email = "rodrigo@gmail.com"
let _email = "joao@gmail.com"
let user_email = "ana@gmail.com"
console.log($email)
console.log(_email)
console.log(user_email)

// Podemos usar acentos e caracteres especiais, mas não é recomendável.
let Ação = "Cadastrar"
console.log(Ação)

// Não podemos começar uma variável com números.
// let 1user = "Ana"

// Recomendações
// Escrever em Inglês, para manter um padrão.
// Isso vai ajudar a não usarmos acentos e caracteres especiais.
// Essas coisas podem confundir e deixar o codigo ilegível.
// Dar nome que faça sentido.
// Exemplo, criar uma variável com o nome productName.
// Fica fácil saber que é o nome de um produto, por exemplo.

// RECOMENDAÇÃO camelCase (corcunda do camelo)
// Escrevemos a primeira palavra com tudo minúsculo e a segunda com maiúscula
// Isso porque não podemos criar variável com espaço no meio dela.

let productName = "Teclado"
let firstName = "Rodrigo"
let lastName = "Gonçalves"

// RECOMENDAÇÃO snake_case (rastejar).
// Escrever tudo em minúsculo.
let product_name = "Teclado"
let first_name = "Rodrigo"
let last_name = "Gonçalves"





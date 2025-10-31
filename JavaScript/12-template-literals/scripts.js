// Template literals (template string, interpolação de strings)


let username = "Rodrigo"
let email = "rodrigo@email.com"

// Passar mais de um parâmetro
console.log(username, email, "teste")


// Concatenar texto - (juntar texto).
let message = "Olá, " + username + ". Você conectou com o e-mail " + email

console.log(message)


// Template literals - torna mais facil e organizado o que fizemos acima.
console.log(`Olá, ${username}. Você conectou com o e-mail ${email}`)
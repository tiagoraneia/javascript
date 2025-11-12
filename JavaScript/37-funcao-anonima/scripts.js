// Função anônima (função que não possui nome)
const showMessage = function (){
  return "Olá, Rodrigo"
}

console.log(showMessage())

const showMessage2 = function (message, name){
  return message + name
}

console.log(showMessage2("Olá " , "João"))
/*
  - Coerção de tipos (type casting ou type conversion):
  ocorre quando você explicitamente transforma um valor de um tipo para outro. Isso é feito de forma consciente, usando funções ou métodos específicos para realizar a conversão.
*/

// Converter para número.
let value = "9"
console.log(typeof value)
console.log(typeof Number(value))


// Converter para texto.
let age = 18
console.log(typeof age.toString())
console.log(typeof String(age))


let option = 1
console.log(Boolean(option))
console.log(typeof Boolean(option))



/*
- Coerção de tipos:
  aconrece de forma automática (implicitamente). O JavaScript tenta automaticamente converter um dos valores para um tipo compatível antes de realizar a operação.
*/

// Exemplo de coerção.
console.log(typeof ("10" + 5))

const form = document.querySelector("form")

// Quando fazemos com onsubmit, ele sempre vai levar em consideração o último que criamos.

form.onsubmit = (event) => {
  event.preventDefault()
  console.log("Você fez submit no formulário. #1")
}

form.onsubmit = (event) => {
  event.preventDefault()
  console.log("Você fez submit no formulário. #2")
}

// Quando fazemos com eventr, ele sempre vai levar em consideração todos os que criamos.

form.addEventListener("submit", (event) => {
  event.preventDefault()
  console.log("Você fez submit no formulário #3")
})

form.addEventListener("submit", (event) => {
  event.preventDefault()
  console.log("Você fez submit no formulário #4")
})
/*try {
  // TENTA executar algo
  console.log(r4esult)
} catch (error) {
  // CAPTURA o erro para tratar.
  // console.log(erro)

  // console.log("Não foi possível executar seu pedido. Tente novamente mais tarde!")

  console.log(error)
} finally (
  console.log("Fim")
) */


  let result = 0

  try {
    if(result === 0) {
      throw new Error("O valor é igual a zero.")
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log("Fim")
  }
/*
  EXERCÍCIO 04 — CLASSIFICADOR DE NÚMEROS
*/

function classificarNumero(numero) {
  // TODO:
  // Descubra se o número é positivo, negativo ou zero.
  if (numero < 0) {
    return "negativo"
  } else if (numero > 0){
    if (numero % 2 === 0) {
      return "positivo e par"
    } else {
      return "positivo impar"
    }
  }

  // TODO:
  // Quando o número não for zero, descubra também se ele é par ou ímpar.

  // TODO:
  // Retorne uma mensagem com a classificação.
}

// TODO:
// Teste a função com pelo menos cinco valores diferentes.

console.log(classificarNumero(3))
/*
  EXERCÍCIO 06 — ARROW FUNCTIONS
*/

// TODO:
// Reescreva as funções abaixo utilizando arrow functions.

const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b ) => {
  if (b === 0) {
    return "erro";
  }
  return a / b;
}

// TODO:
// Identifique quais funções podem utilizar retorno implícito.

// TODO:
// Crie uma arrow function calcular() mantendo o comportamento do exercício anterior.

const calcular = (a, b, operacao) => {
  switch (operacao) {
    case "+":
      return somar(a, b);
    case "-":
      return subtrair(a, b);
    case "*":
      return multiplicar(a, b);
    case "/":
      return dividir(a, b);
  }
}

console.log(calcular(1, 1, "/"));

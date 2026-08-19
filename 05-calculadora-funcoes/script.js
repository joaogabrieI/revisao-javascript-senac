/*
  EXERCÍCIO 05 — CALCULADORA UTILIZANDO FUNÇÕES
*/

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "erro";
  } 
    return a / b;
}
  

function calcular(a, b, operacao) {
  switch (operacao) {
    case '+':
      return somar(a, b);
    case '-':
      return subtrair(a, b);
    case '*':
      return multiplicar(a, b);
    case '/':
      return dividir(a, b);
    default: 
      return "Operação inválida!"
  }
}

console.log(calcular(1, 0, "/"));

// TODO:
// Faça alguns testes com calcular().

/*
  EXERCÍCIO 02 — CALCULADORA DE MÉDIA
*/

const nomeAluno = "Aluno Exemplo";

// TODO:
// Crie quatro variáveis/constantes para armazenar as notas.

let nota1 = 10;
let nota3 = 1;
let nota4 = 6;
let nota2 = 8;

// TODO:
// Calcule a soma das quatro notas.

let soma = nota1 + nota2 + nota3 + nota4;

// TODO:
// Calcule a média aritmética.

let media = soma / 4;

// TODO:
// Exiba no console:
// Nome do aluno
// Notas
// Média final
if (media >= 7) {
  console.log(`O aluno ${nomeAluno} foi aprovado com a média: ${media}.\nNotas tiradas: ${nota1}, ${nota2}, ${nota3}, ${nota4}`)
}

console.log(`O aluno ${nomeAluno} foi reprovado com a média: ${media}. \n Notas tiradas: ${nota1}, ${nota2}, ${nota3}, ${nota4}`)

// DESAFIO:
// Formate a média com duas casas decimais.

console.log(`Média: ${media.toFixed(2)}`)

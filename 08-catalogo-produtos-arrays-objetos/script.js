/*
  EXERCÍCIO 08 — CATÁLOGO DE PRODUTOS
*/

// TODO:
// Crie um array chamado produtos com pelo menos 5 objetos.
//
// Cada produto deve possuir:
// id
// nome
// preco
// categoria
// emEstoque

const produtos = [
  {
    id: 1,
    nome: "Notebook Gamer",
    preco: 4500.00,
    categoria: "Eletrônicos",
    emEstoque: true
  },
  {
    id: 2,
    nome: "Smartphone 5G",
    preco: 2200.50,
    categoria: "Eletrônicos",
    emEstoque: true
  },
  {
    id: 3,
    nome: "Cadeira Ergonômica",
    preco: 1200.00,
    categoria: "Móveis",
    emEstoque: false
  },
  {
    id: 4,
    nome: "Mouse Sem Fio",
    preco: 150.00,
    categoria: "Periféricos",
    emEstoque: true
  },
  {
    id: 5,
    nome: "Monitor Ultrawide",
    preco: 1800.00,
    categoria: "Eletrônicos",
    emEstoque: true
  }
];

// TODO:
// Percorra o array com for, for...of ou forEach().

for (i = 0; i < produtos.length; i++) {
  console.log(produtos[i].nome);
}

for (prod of produtos) {
  console.log(prod.nome);
}

produtos.forEach((x) => console.log(x.nome));

// TODO:
// Para cada item, mostre no console uma frase formatada
// contendo as informações do produto.

produtos.forEach((x) => {
  let disponivel = x.emEstoque === true ? "Produto disponível" : "Produto não disponível";

  console.log(`Nome do Produto: ${x.nome}\n Valor: R$ ${x.preco}\n Categoria: ${x.categoria} \n ${disponivel}`);
})


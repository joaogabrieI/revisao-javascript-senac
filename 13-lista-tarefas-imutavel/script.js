/*
  EXERCÍCIO 13 — LISTA DE TAREFAS IMUTÁVEL
*/

const tarefas = [
  { id: 1, titulo: "Estudar JavaScript", concluida: false },
  { id: 2, titulo: "Praticar arrays", concluida: false },
  { id: 3, titulo: "Revisar funções", concluida: true },
];

function adicionarTarefa(lista, novaTarefa) {
  return [...lista, novaTarefa];
}

function concluirTarefa(lista, id) {
  return lista.map(tarefa => 
    tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
  );
}

function removerTarefa(lista, id) {
  return lista.filter(tarefa => tarefa.id !== id);
}

// TODO:
// Teste as três funções sem alterar diretamente tarefas.

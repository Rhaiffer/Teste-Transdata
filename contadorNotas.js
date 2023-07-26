function retirarNotas(valorParaRetirar, valorNoCaixa) {
  const notasDisponiveis = [200, 100, 50, 20, 10, 5, 2];
  const quantidadeNotas = {};

  if (valorParaRetirar > valorNoCaixa) {
    throw new Error("Valor selecionado para retirar é maior que a quantidade disponível no caixa.");
  }

  let valorRestante = valorParaRetirar;

  for (let nota of notasDisponiveis) {
    const qtdNotas = Math.floor(valorRestante / nota);
    if (qtdNotas > 0) {
      quantidadeNotas[`R$${nota}`] = qtdNotas;
      valorRestante %= nota;
    }
  }
  const notasRetiradas = [];
  for (let nota of notasDisponiveis) {
    const qtd = quantidadeNotas[`R$${nota}`] || 0;
    for (let i = 0; i < qtd; i++) {
      notasRetiradas.push(nota);
    }
  }

  return { quantidadeNotas, notasRetiradas, valorSacado: valorParaRetirar };
}

const valorNoCaixa = 10000; // Informe aqui o valor que o caixa possui
const valorParaRetirar = 760;

try {
  const resultado = retirarNotas(valorParaRetirar, valorNoCaixa);
  console.log("Quantidade de notas:");
  for (let nota in resultado.quantidadeNotas) {
    console.log(`${nota}: ${resultado.quantidadeNotas[nota]}`);
  }
  console.log("Valor total sacado:", resultado.valorSacado);
} catch (error) {
  console.log("Erro:", error.message);
}

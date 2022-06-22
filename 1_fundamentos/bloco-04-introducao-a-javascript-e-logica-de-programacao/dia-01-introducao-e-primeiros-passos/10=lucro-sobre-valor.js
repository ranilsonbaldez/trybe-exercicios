const valorCusto = 30;
const valorDeVenda = 45;

if (valorCusto >= 0 && valorDeVenda >= 0) {
  const valorCustoTotal = valorCusto * 1.2;
  const lucro = (valorDeVenda - valorCustoTotal) * 1000;
  console.log(lucro);
} else {
  console.log("Erro! Valores negativos!");
}

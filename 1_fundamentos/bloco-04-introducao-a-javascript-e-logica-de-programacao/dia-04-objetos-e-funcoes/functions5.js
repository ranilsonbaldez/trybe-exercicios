// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function repeticao(numeros) {
    let quantRepeticao = 0;
    let contNumero = 0;
    let iNumRepetido = 0;
    for (let i in numeros) {
      let verificaNumero = numeros[i];
      for (let i2 in numeros) {
        if (verificaNumero === numeros[i2]) {
          contNumero += 1;
        }
      }
      if (contNumero > quantRepeticao) {
        quantRepeticao = contNumero;
        iNumRepetido = i;
      }
      contNumero = 0;
    }
    return numeros[iNumRepetido];
  }

  console.log(repeticao([2, 3, 2, 5, 8, 2, 3]));
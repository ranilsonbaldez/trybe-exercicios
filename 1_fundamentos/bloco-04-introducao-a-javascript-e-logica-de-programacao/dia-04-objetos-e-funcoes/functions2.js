// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.


function iMaiorValor(numeros) {
    let indiceM = 0;
    for (let i in numeros) {
        if (numeros[indiceM] < numeros[i]) {
            indiceM = i;
        }
    }
        return indiceM;
    }

    console.log('O índice do maior valor é: ' + iMaiorValor([2, 3, 6, 7, 10, 1]));


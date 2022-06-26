//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function iMenorValor(numeros) {
    let indiceM = 0;
    for (let i in numeros) {
        if (numeros[indiceM] > numeros[i]) {
            indiceM = i;
        }
    }
        return indiceM;
    }

    console.log('O índice do maior valor é: ' + iMenorValor([2, 4, 6, 7, 10, 0, -3]));

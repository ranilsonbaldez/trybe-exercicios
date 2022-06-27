// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorPalavra(nomes) {
    let maiorNome = nomes[0];
    for (let i in nomes) {
        if (maiorNome.length < nomes[i].length) {       //condição percorrendo os índices
            maiorNome = nomes[i];                       //atribui a palavra com maior numero de caracteres
        }
    }
    return maiorNome;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

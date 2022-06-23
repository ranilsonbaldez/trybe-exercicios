//fatorial de 10

let numeros = [];   //declaração da array vazia

for (let index = 1; index <= 10; index += 1) {      //contador para incluir valores de 1 a 10
    numeros.push(index);        //inclui os valores na array
}

let fatorial = 1;       //declara a variável fatorial com valor inicial 1

for (index = 0; index < numeros.length; index += 1) {       //contador para percorrer os 10 valores da array numeros
    fatorial = fatorial * numeros[index];       //atribui a variável fatorial as multiplicações de cada valor da array numeros
}

console.log(fatorial);      //exibe o resultado das multiplicações
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;       //declara a variável soma com o valor inicial zero

for (index = 0; index < numbers.length; index += 1){    //cria o laço do contador
    soma += numbers[index];     //faz o incremanto de cada valor e coloca na variável soma
}

let media = (soma / 10);

console.log(media);

if (media > 20) {
    console.log('Valor maior que 20.');
}
else {
    console.log('Valor menor ou igual a 20.');
}

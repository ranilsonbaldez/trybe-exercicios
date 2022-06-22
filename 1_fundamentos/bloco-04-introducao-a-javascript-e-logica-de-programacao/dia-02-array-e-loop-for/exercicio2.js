let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;       //declara a variável soma com o valor inicial zero

for (index = 0; index < numbers.length; index += 1){    //cria o laço do contador
    soma += numbers[index];     //faz o incremanto de cada valor e coloca na variável soma
}

console.log(soma);      //exibe o resultado de soma
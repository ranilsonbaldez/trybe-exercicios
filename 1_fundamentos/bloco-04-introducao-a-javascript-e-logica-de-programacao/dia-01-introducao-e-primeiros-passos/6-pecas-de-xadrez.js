let pecaXadrez = 'ReI';

switch (pecaXadrez.toLowerCase()) {         //Coloca todos os caracteres maiúsculos e coloca em minúsculo.
    case 'rei': console.log('Rei -> Move uma casa em qualquer direção.');
        break;
    case 'rainha': console.log('Rainha -> Move em qualquer direção.');
        break;
    case 'bispo': console.log('Bispo -> Move nas diagonais.');
        break;
    case 'cavalo': console.log('Cavalo -> Move em "L" por cima das peças.');
        break;
    case 'peão': console.log('Peão -> Move apenas uma casa a frente.');
        break;
    default: console.log("Erro! Peça inválida!");   //Não atende a nenhum dos valores.
}
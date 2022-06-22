const num1 = 6;
const num2 = 15;
const num3 = 30;

let resultado;

if ((num1 % 2 !== 0 || num2 % 2 !== 0 || num3 & 2 !== 0)) {
    resultado = true;
    console.log(resultado);
}
else {
    resultado = false;
    console.log(resultado);
}
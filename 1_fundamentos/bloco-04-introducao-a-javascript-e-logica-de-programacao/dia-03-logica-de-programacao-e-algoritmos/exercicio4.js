let maiorNumeroPrimo = 0;

for (let index = 2; index <= 50; index += 1) {
  let isPrime = true;
  for (let numeroDivisor = 2; numeroDivisor < index; numeroDivisor += 1) {
    if (index % numeroDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    maiorNumeroPrimo = index;
  }
}

console.log(maiorNumeroPrimo);
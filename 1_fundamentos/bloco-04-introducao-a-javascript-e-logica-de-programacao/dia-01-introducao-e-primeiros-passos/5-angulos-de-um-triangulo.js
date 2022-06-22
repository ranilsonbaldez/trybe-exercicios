const angulo1 = 90;
const angulo2 = 45;
const angulo3 = 45;

if ((angulo1 + angulo2 + angulo3) === 180 && angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
    console.log(true);
}
else if ((angulo1 + angulo2 + angulo3) !== 180 && angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
    console.log(false);
}
else {
    console.log("Erro! Ângulo incorreto!");
}

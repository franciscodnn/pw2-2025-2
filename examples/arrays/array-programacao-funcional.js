
console.log("Programação funcional");
const arrayMapeado = [5, 10, 15].map( (x) => x * 2 );
console.log(arrayMapeado);

const arrayFiltrado = [5, 10, 15].filter(
  (x) => (x % 2) === 0
);
console.log(arrayFiltrado);

const somatorio = [5, 10, 15].reduce((x, acumulador) =>
    acumulador = x + acumulador
);
console.log(somatorio);
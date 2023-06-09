const { log } = console;

console.group('Cuadrado');

function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado * lado,
  };
}
log(`El area del cuadrado es: ${calcularCuadrado(5).area} cm2`);
log(`El perimetro del cuadrado es: ${calcularCuadrado(5).perimetro} cm`);

console.groupEnd('Cuadrado');

console.group('Triangulo');

function calcularTriangulo(lado1,lado2,base,altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2
  }
}
log(`El area del triangulo es: ${calcularTriangulo(6,6,4,5.5).area} cm2`);
log(`El perimetro del cuadrado es: ${calcularTriangulo(6,6,4,5.5).perimetro} cm`);

console.groupEnd('Triangulo');

console.group('Circulo');

function calcularCirculo(radio) {
  const diametro = radio * 2;
  return {
    circunferencia: diametro * Math.PI,
    area: Math.pow(radio, 2) * Math.PI
  }
}

log(`La circunferencia del circulo es de: ${calcularCirculo(3).area}`);
log(`El area del circulo es: ${calcularCirculo(3).area} cm2`);


console.groupEnd('Circulo');

console.group('TrianguloEscaleno');

function calcularTrianguloEscaleno(a, b, c) {
    const Semiperimetro = (a + b + c ) /2 ;

    if (a == b && a == c ) {
        console.warn('Este no es un triangulo escaleno.')
    }
    else {
        H = ((2/a) * (Math.sqrt(Semiperimetro * (Semiperimetro - a) *(Semiperimetro - b) * (Semiperimetro - c))));
        console.log('La altura "H" = ' + H) ;
    }
}

calcularTrianguloEscaleno(2,3,4);


console.groupEnd('TrianguloEscaleno');

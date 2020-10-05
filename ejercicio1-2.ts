function double(x: number): number {
  return x * 2;
}

function inc(x: number): number {
  return x + 1;
}

function initial(word: string): string {
  return word.charAt(0);
}

function size(word: string): number {
  return word.length;
}

function map<A, B>(xs: A[], f: (x: A) => B): B[] {
  var ys = [];
  for (var i = 0; i < xs.length; i++) {
    ys.push(f(xs[i]));
  }
  return ys;
}

function doubleArray(numbers: number[]): number[] {
  return map(numbers, double);
}

function incArray(numbers: number[]): number[] {
  return map(numbers, inc);
}

function initials(words: string[]): string[] {
  return map(words, initial);
}

function sizes(word: string[]): number[] {
  return map(words, size);
}

var numbers = [1, 5, 2];
var words = ['Pepe', 'Luis', 'Ana'];

console.log(doubleArray(numbers));
console.log(incArray(numbers));
console.log(initials(words));
console.log(sizes(words));

//Cree la funcion "sum" que dado un array de numeros devuelva su suma

var P = [1, 2, 3, 4, 5];
function sum(P: number[]): number {
  var suma = 0;
  for (var i = 0; i < P.length; i++) {
    suma = suma + P[i];
  }
  return suma;
}

//Cree la funcion "max" que dado un array de numeros devuelva el mayor de ellos

function max(P: number[]): number {
  var valorMax = P[0];
  for (var i = 1; i < P.length; i++) {
    if (valorMax < P[i]) {
      valorMax = P[i];
    }
  }
  return valorMax;
}

console.log(sum(P));
console.log(max(P));

//Cree una función que reciba un array de palabras y devuelva un string con la contenación de las iniciales
//Cree una funcion "pairs" que reciba un array de numeros y devuelva un array de numeros conteniendo los numeros pares

function pairs(xs: number): number {
  return;
}

pairs([]);
//Cree una function "adults" que reciba un array de numbers y devuelva un array de numbers con las edades mayores de edad

function adults(ages: number[]): number[] {
  return;
}

adults([]);

//

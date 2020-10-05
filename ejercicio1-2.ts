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
var xs2 = [1, 2, 3, 4, 5];
function pairs(xs2: number[]): number[] {
  var ys2 = [];
  var p = 0;
  for (var i = 0; i < xs2.length; i++) {
    if (xs2[i] % 2 == 0) {
      ys2[p] = xs2[i];
      p++;
    }
  }

  return ys2;
}

console.log(pairs(xs2));
//Cree una function "adults" que reciba un array de numbers y devuelva un array de numbers con las edades mayores de edad

var xs3 = [11, 18, 24, 12];
function adults(ages: number[]): number[] {
  var ys3 = [];
  var p = 0;
  for (var i = 0; i < xs3.length; i++) {
    if (xs3[i] >= 18) {
      ys3[p] = xs3[i];
      p++;
    }
  }

  return ys3;
}

console.log(adults(xs3));

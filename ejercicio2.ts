//Cree una función que reciba un array de palabras y devuelva un string con la contenación de las iniciales
//Cree una funcion "pairs" que reciba un array de numeros y devuelva un array de numeros conteniendo los numeros pares
/*var xs = [1, 2, 3, 4, 5];
function pairs(xs: number[]): number[] {
  var ys: number[] = [];
  var p = 0;
  for (var i = 0; i < xs.length; i++) {
    if (xs[i] % 2 == 0) {
      ys[p] = xs[i];
      p++;
    }
  }

  return ys;
}
console.log(pairs(xs));*/

function pairs(xs: number[]): number[] {
  var ys: number[] = [];
  for (var x of xs) {
    if (x % 2 == 0) {
      ys[ys.length] = x;
    }
  }
  return ys;
}

//Cree una function "adults" que reciba un array de numbers y devuelva un array de numbers con las edades mayores de edad

/*var xs2 = [11, 18, 24, 12];
function adults(ages: number[]): number[] {
  var ys2 = [];
  var p = 0;
  for (var i = 0; i < xs2.length; i++) {
    if (xs2[i] >= 18) {
      ys2[p] = xs2[i];
      p++;
    }
  }
  return ys2;
}
console.log(adults(xs2));*/

function adults(ages: number[]): number[] {
  var ys: number[] = [];
  for (var x of ages) {
    if (x >= 18) {
      ys[ys.length] = x;
    }
  }
  return ys;
}

console.log(pairs([1, 2, 3, 4])); //[2,4]
console.log(adults([12, 18, 21, 34, 14])); //[18,21,34]

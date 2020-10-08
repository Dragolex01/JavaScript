function pairs(xs: number[]): number[] {
  return filter(xs, pair);
}

function pair(x: number): boolean {
  return x % 2 == 0;
}

function filter<A>(xs: A[], f: (x: A) => boolean): A[] {
  var ys = [];
  for (var i = 0; i < xs.length; i++) {
    if (f(xs[i])) {
      ys.push(xs[i]);
    }
  }
  return ys;
}

//Funcion "reduce"

function reduce<A, B>(xs: A[], f: (acc: B, x: A) => B, init: B): B {
  var acc = init;
  for (var i = 0; i < xs.length; i++) {
    acc = f(acc, xs[i]);
  }
  return acc;
}

//Funcion "some"

function some<A>(xs: A[], p: (x: A) => boolean): boolean {
  for (var i = 0; i < xs.length; i++) {
    if (p(xs[i])) {
      return true;
    }
  }
  return false;
}

console.log(some([1, 2, 3, 4], pair)); // true
console.log(some([1, 3, 5], pair)); // false

//Implementar "funcion" reduce a la funcion "some"

function someReduce<A>(xs: A[], p: (x: A) => boolean): boolean {
  return reduce(
    xs,
    function reducer(acc: boolean, x) {
      return acc || p(x);
    },
    false
  );
}

//Funcion "every"

function every<A>(xs: A[], p: (x: A) => boolean): boolean {
  for (var i = 0; i < xs.length; i++) {
    if (!p(xs[i])) {
      return false;
    }
  }
  return true;
}

console.log(every([1, 2, 3, 4], pair)); // false
console.log(every([2, 4, 6], pair)); // true

//Implementar funcion "reduce" a la funcion "every"

//Funcion "zip"
//var xs: [number | string][] = [[1, 'reerre']];
function zip<A, B>(xs: A[], ys: B[]): [A, B][] {
  var zipped = [];
  var minSize: number = xs.length > ys.length ? ys.length : xs.length;

  for (var i = 0; i < minSize; i++) {
    zipped.push([xs[i], ys[i]]);
  }
  return zipped;
}

console.log(zip([1, 2, 4], ['A', 'B', 'C', 'D'])); // [[1, "A"], [2, "B"], [4, "C"]]

//Funcion "zipWith" (Incompleta)

function zipWith<A, B, C>(xs: A[], ys: B[]): [A, B][] {
  var zipped = [];
  var minSize: number = xs.length > ys.length ? ys.length : xs.length;

  for (var i = 0; i < minSize; i++) {
    zipped.push([xs[i], ys[i]]);
  }
  return zipped;
}

//console.log(zipWith([0, 1, 2, 4], [5, 7, 8], sum)); // [0+5, 1+7, 2+8]

//Zip2

/*
// implmentar map con reduce
// implmentar filter con reduce
*/

//High-order funtions exercises
//Ramda

/*
Ejercicios:

take([1,4,5,6,7], 3); --> [1,4,5] Cole los 3 primeros elementos
take([1,4], 3); --> [1,4]

takeWhile([2,4,5,6,7], pair); --> [2,4] Elementos pares, en cunanto que encuentra una impar no devuelve mas

drop([1,4,5,6,7], 3); --> [6,7] Borra elementos
drop([1,4], 3); --> []

dropUntil([1,3,6,4,2], pair); --> [6,4,2] Borra hasta que encuentra un elementos que no cumple la condicion

-Implementar "take" con "takeWhile"
-Implementar "drop" con "dropUntil"

odd = not(pair);
odd(1); --> True
odd(2); --> False

flippedTake = flip(take); --> Función devuelve otra función
flippedTake(3, [1,4]); --> [1,4]

*/

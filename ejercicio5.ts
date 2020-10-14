function pair(x: number): boolean {
  return x % 2 == 0;
}

//Function "take" devuelve los 3 primeros elementos

function take(xs: number[], n: number): number[] {
  var ys = [];
  for (var i = 0; i < xs.length; i++) {
    if (i < n) {
      ys.push(xs[i]);
    }
  }
  return ys;
}

//Funcion "takeWhile" devuelve los elementos impares hasta que encuentre un impar

function takeWhile<A>(xs: A[], p: (x: A) => boolean): number[] {
  var ys = [];

  for (var i = 0; i < xs.length && p(xs[i]) == true; i++) {
    ys.push(xs[i]);
  }

  return ys;
}

//Funcion "drop" elimina los 3 primeros elementos

function drop<A>(xs: A[], n: number): A[] {
  //return xs.slice(-n+1); Borra desde el final
  var ys = [];
  for (var i = 0; i < xs.length; i++) {
    if (i >= n) {
      ys.push(xs[i]);
    }
  }
  return ys;
}

//Function "dropUntil" elimina los elementos hasta que encuentre uno que cumpla la condicion

function dropUntil<A>(xs: A[], p: (x: A) => boolean): number[] {
  var ys = [];
  var i = 0;

  for (var i = 0; i < xs.length; i++) {
    if (p(xs[i]) == true) {
      while (i < xs.length) {
        ys.push(xs[i]);
        i++;
      }
    }
  }
  return ys;
}

function flip<A, B, C>(f: (x: A, y: B) => C): (y: B, x: A) => C {
  return function (y: B, x: A) {
    return f(x, y);
  };
}

var flippedTake = flip(take);

function filter<A>(xs: A[], f: (x: A) => boolean): A[] {
  return reduce{xs, function(ys:A[], xs:A{
    return p(x) ? ys.concat(x) :ys;
  },[]
  };
}

//Funcion flippedTake = flip(take) Funcion devuelve otra funcion
//flippedTake(3, [1,4]); --> [1,4]
//Implementar "take" con "takeWhile"
//Implementar "drop" con "dropUntil"

console.log(take([1, 4, 5, 6, 7], 3)); //[1,4,5]
console.log(take([1, 4], 3)); //[1,4,5]
console.log(takeWhile([2, 4, 5, 6, 7], pair)); //[2,4]
console.log(drop([1, 4, 5, 6, 7], 3)); //[6,7]
console.log(drop([1, 4], 3)); //[]
console.log(dropUntil([1, 3, 6, 4, 2], pair)); //[6,4,2]
console.log(flippedTake(3, [1, 4, 5, 6, 7])); //[1,4,5]

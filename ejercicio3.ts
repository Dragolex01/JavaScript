//Cree la funcion "sum" que dado un array de numeros devuelva su suma

/*function sum(xs: number[]): number {
  var sum: number = 0;
  for (var i = 0; i < xs.length; i++) {
    sum = sum + xs[i];
  }
  return sum;
}
console.log(sum([1, 2, 3, 4, 5]));*/

//Cree la funcion "max" que dado un array de numeros devuelva el mayor de ellos

function max(xs: number[]): number {
  var m = -Infinity;
  for (var i = 0; i < xs.length; i++) {
    if (xs[i] > m);
  }
  return m;
}

/*function max(xs: number[]): number {
  var max: number = xs[0];
  for (var i = 1; i < xs.length; i++) {
    if (max < xs[i]) {
      max = xs[i];
    }
  }
  return max;
}
console.log(max([5, 2, 1, 7, 6]));*/

//Factorial Recursivo
function factorial_recursivo(n: number): number {
  return n == 0 ? 1 : n * factorial_recursivo(n - 1);
}
/*
fuction factorial_recursivo2(n: number): number{
    function recursion(n:number, acc:number=1): number{
        return n == 0 ? 1 : n * recursion(n -1, acc * n);
    }
    return recursion(n, 1);
}*/

//Factorial Iterativo
function factorial_iterativo(n: number): number {
  var x = 1;
  if (n != 0) {
    for (var i = 1; i <= n; i++) {
      x = x * i;
    }
  }
  return x;
}

console.log(factorial_recursivo(5)); //24
console.log(factorial_iterativo(5)); //24

/*function map<A, B>(xs: A[], f: (x: A) => B): B[] {
  var ys = [];
  for (var i = 0; i < xs.length; i++) {
    ys.push(f(xs[i]));
  }
  return ys;
}*/

function map<A, B>(xs: A[], f: (x: A) => B): B[] {
  if (xs.length == 0) {
    return [];
  }

  return [f(xs[0])].concat(map(xs.slice(1), f));
}

console.log(map([1, 2, 3], (x) => x * 2));

/*Ejercicios: 

Crear como recursivo:

-Filter
-Reduce

*/

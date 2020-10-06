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

function isAdults(x: number): boolean {
  return x >= 18;
}

function adults(ages: number[]): number[] {
  return filter(ages, isAdults);
}

console.log(pairs([1, 2, 3, 4]));
console.log(adults([12, 18, 34, 14]));

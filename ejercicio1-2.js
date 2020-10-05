function double(x) {
    return x * 2;
}
function inc(x) {
    return x + 1;
}
function initial(word) {
    return word.charAt(0);
}
function size(word) {
    return word.length;
}
function map(xs, f) {
    var ys = [];
    for (var i = 0; i < xs.length; i++) {
        ys.push(f(xs[i]));
    }
    return ys;
}
function doubleArray(numbers) {
    return map(numbers, double);
}
function incArray(numbers) {
    return map(numbers, inc);
}
function initials(words) {
    return map(words, initial);
}
function sizes(word) {
    return map(words, size);
}
var numbers = [1, 5, 2];
var words = ['Pepe', 'Luis', 'Ana'];
console.log(doubleArray(numbers));
console.log(incArray(numbers));
console.log(initials(words));
console.log(sizes(words));
//Cree la funcion "sum" que dado un array de numeros devuelva su suma
var P = [1, 2, 3];
function sum(P) {
    var suma = 0;
    for (var i = 0; i < P.length; i++) {
        suma = suma + P[i];
    }
    return suma;
}
console.log();
//Cree la funcion "max" que dado un array de numeros devulelva el mayor de ellos
function max(P) {
    var valorMax = P[0];
    for (var i = 1; i < P.length; i++) {
        if (valorMax < P[i]) {
            valorMax = P[i];
        }
    }
    return valorMax;
}
console.log();

//Introducir un array y que devuelva los datos multiplicados por 2
function doubleArray(numeros) {
  var dobleNumeros = [];
  for (var i = 0; i < numeros.length; i++) {
    dobleNumeros.push(numeros[i] * 2);
  }
  return dobleNumeros;
}
console.log(doubleArray([2, 4, 8]));

//Introducir un array y que devuelva los datos + 1
function sumaArray(numeros) {
  var sumaArray = [];
  for (var i = 0; i < numeros.length; i++) {
    sumaArray.push(numeros[i] + 1);
  }
  return sumaArray;
}
console.log(sumaArray([2, 4, 8]));

//No repetir código
//Introducir un array initial y que devuelva el primer carácter de cada elemento
function initial(nombres) {
  var caracteres = [];
  for (var i = 0; i < nombres.length; i++) {
    caracteres.push(nombres[i].charAt(0));
  }
  return caracteres;
}
console.log(initial(['Pepe', 'Luis', 'Ana']));

//Introducir un array y que devuelva la longitud de cada elemento
function longElement(nombres) {
  var longitud = [];
  for (var i = 0; i < nombres.length; i++) {
    longitud.push(nombres[i].length);
  }
  return longitud;
}
console.log(longElement(['Pepe', 'Luis', 'Ana']));

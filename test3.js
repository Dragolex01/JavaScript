function greet2(name) {
  var result = 'Hi ' + name + '!';
  return result;
}

//console.log(greet('Pepe'));
/*
var a = function () {
  return 'Hola';
};
*/
//var a = greet2;
//console.log(a());

//Lambda function o Fat arround function

var greet3 = (name) => {
  return 'Hi ' + name + '!';
};

var greet4 = (name) => 'Hi ' + name + '!';

console.log(greet4('prueba'));

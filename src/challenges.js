// Desafio 1
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true;
  } else {
    return false;
  }
}
//console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
//console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(text) {
  return text.split(" ");
}
//console.log(splitSentence("go Trybe"));
//resolução encontrada no w3schools.

// Desafio 4
function concatName(array) {
  return (array[array.length - 1] + ", " + array[0]); 
}
//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}
//console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(numbers) {
  numbers.sort();
  if (numbers[numbers.length -1] < 0) {
    numbers.reverse();
  }
  let count = 0;
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] === numbers[numbers.length - 1]) {
      count ++;
    }
  }
  return count;
}
//console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))
//.reverse(); encontrado no 3wschools.

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 < distanceCat2){
    return "cat1";
  } else if (distanceCat2 < distanceCat1){
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}
//console.log(catAndMouse(1, 0, 2));
//Math.abs(); encontrado no 3wschools.

// Desafio 8
function fizzBuzz(numbers) {
  let resultado = [];
  for (let index = 0; index < numbers.length; index ++) {
      if ((numbers[index] % 3) === 0 && (numbers[index] % 5) !== 0) {
          resultado.push("fizz");
      } else if ((numbers[index] % 5) === 0 && (numbers[index] % 3) !== 0){
          resultado.push("buzz");
      } else if ((numbers[index] % 5) === 0 && (numbers[index] % 3) === 0){
        resultado.push("fizzBuzz");
      } else if ((numbers[index] % 5) !== 0 && (numbers[index] % 3) !== 0){
        resultado.push("bug!");
      }
  }
  return resultado;
}
//console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(text) {
  let newtext = text.replace(/a/g, "1");
  newtext = newtext.replace(/e/g, "2");
  newtext = newtext.replace(/i/g, "3");
  newtext = newtext.replace(/o/g, "4");
  newtext = newtext.replace(/u/g, "5");

  return newtext;
}
function decode(text) {
  let newtext = text.replace(/1/g, "a");
  newtext = newtext.replace(/2/g, "e");
  newtext = newtext.replace(/3/g, "i");
  newtext = newtext.replace(/4/g, "o");
  newtext = newtext.replace(/5/g, "u");

  return newtext;
}
//console.log(decode("l5c1s"));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};

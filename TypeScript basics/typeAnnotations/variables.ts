// we are telling the ts that it is of type number and it can be only of number type.
// if you use let and try to assign string or any other type- still it is not possibe;
const apples: number = 5;

// when to use annotations?

// 1- functions returns any data type

const json = '{"x":10,"y":20}';

const cordinates: { x: number; y: number } = JSON.parse(json); // any type

// 2- when we declare a variable and initilized later.

let words = ['green', 'red', 'blue'];
let wordsFound;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'red') {
    wordsFound = true;
  }
}

// 3- variable whose type cannot be infered correctly

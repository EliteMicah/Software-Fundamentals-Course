const arr = [1, 2, 3, 4, 5, 6];

/*
// Map Function
// Mapping every value in arr to the math
// in a new array
const squares = arr.map((x) => x ** 2);
console.log(squares);

function map(arr, func) {
  const newArr = [];

  for (const value of arr) {
    const newValue = func(value);
    newArr.push(newValue);
  }

  return newArr;
}

const result = map(arr, (x) => x ** 2);
console.log(result);
*/

/*
// Filter Function
//const filteredArr = arr.filter((value) => value % 2 == 0);
//console.log(filteredArr);

function filter(arr, func) {
  const newArr = [];

  for (const value of arr) {
    if (func(value)) {
      newArr.push(value);
    }
  }

  return newArr;
}

const result = filter(arr, (x) => x % 2 == 0);
console.log(result);
*/

/*
// Reduce Function
//const sum = arr.reduce((prev, current) => prev + current);
//console.log(sum);

function reduce(arr, func) {
  let currentResult = 0;

  for (const num of arr) {
    currentResult = func(currentResult, num);
  }

  return currentResult;
}

const result = reduce(arr, (prev, next) => prev - next);
console.log(result);
*/

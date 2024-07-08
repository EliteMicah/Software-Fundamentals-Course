/*
Write a function that has two parameters, the first being an array of strings, the second being an
array of unique integers (whole numbers). Your function should return the number of strings in
the input array that have a length contained in the second array. If the array of numbers is empty
you should return 0.
*/

let strings = ["hello", "world", "tim", "a", "it"];
let numbers = [5, 1];
let result = [];
let num = 0;

solveArr(strings);

function solveArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length == numbers[0] || arr[i].length == numbers[1]) {
      result.push(arr[i]);
      num++;
    }
  }
}

console.log(num, result);

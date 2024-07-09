/*
Write a function that accepts an array of numbers and returns the 2 largest numbers in the
array. The largest values should be returned in an array where the first element in the array is
the larger of the two elements. You may assume you will always be given an array that contains
at least 2 numbers.
*/

const sampleArr = [7, -2, 3, 4, 5, 1, 23, 31, 23];
const sampleArr2 = [7, -2, 3, 4, 5, 1, 23, 23];
sortArr(sampleArr);
sortArr(sampleArr2);

function sortArr(arr) {
  const resultArr = [];
  arr.sort((a, b) => b - a);

  resultArr.push(arr[0]);
  resultArr.push(arr[1]);

  console.log(resultArr, "\n");
}

/*
Example 1: 
mathIsFun(“12|13|-4|5|”) -> 25 
// the numbers are 12, 13, -4 and 5. The largest sum of two numbers is 12 + 13 = 25 

Example 2: 
mathIsFun(“-2|-4|-1|-1”) -> -2 
// the numbers are -2, -4, -1 and -1. The largest sum of two numbers is -1 + -1 = -2 
*/

const userString = "-2|-4|-1|-1";
const arr = userString.split("|");

console.log(arr);

function mathIsFun(stringArr) {
  let maxNum = -Infinity;

  for (let i = 0; i < stringArr.length; i++) {
    let currNum = Number(stringArr[i]);

    for (let k = i + 1; k < stringArr.length; k++) {
      let nextNum = Number(stringArr[k]);

      if (currNum + nextNum >= maxNum) {
        maxNum = currNum + nextNum;
      }
    }
  }
  return maxNum;
}

console.log(mathIsFun(arr));

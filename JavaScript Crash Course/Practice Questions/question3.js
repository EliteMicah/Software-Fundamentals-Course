/*
Example 1: 
Min = 2, max = 7 
~Program outputs: “[2, 3, 4, 5, 6, 7]”~ 

Example 2: 
Min = -3, Max = -9 
~Program outputs: “[ ]”~ this is because the max is less than the min 

Example 3: 
Min = -1, Max = -1 
~Program outputs: “[-1]”~
*/

let userMin = -1;
const userMax = -1;

const arr = [];

while (userMin <= userMax) {
  arr.push(userMin);
  userMin++;
}

console.log(arr);

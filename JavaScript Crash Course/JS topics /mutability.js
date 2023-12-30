/*

// Mutable - Changeable
// Immutable - NonChangeable

// Lesson 1
let x = 10;
const y = x; // copy of 10

x = 20;

console.log(x, y);

let x = [1, 2, 3, 4, 5]; // x -> ref -> [1, 2, 3, 4, 5]
let y = x; // y -> ref ->              ^[1, 2, 3, 4, 5]
let z = [...x]; // Direct copy
z[0] = 100;

// x[0] = 100; // Changes both x and y
x = [1]; // Doesn't change y. Makes a brand new array

console.log(x, y, z);
*/

/*
// Lesson 2
let x = [[1], [2], [3], [4]];
let y = [...x];

y[0] = [100]; // Changes only y[0]
y[0][0] = [100]; // Changes both x[0][0] and y[0][0]

console.log(x, y);
*/

/*
function modifyArray(x) {
  //x[0] = 100;
}

const arr = [1, 2, 3, 4];
console.log(arr);
modifyArray(arr);
console.log(arr);
*/

function modifyObj(x) {
  x.prop = "test";
}

const obj = { name: "Tim" };
console.log(obj);
modifyObj(obj);
console.log(obj);

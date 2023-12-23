// Lesson 1
//const arr = new Array(20, 20, 20);
// const arr = [20, 20, 20];

/*
// Lesson 2
const arr = [];

const name1 = prompt("Enter Name");
const age = prompt("Enter Age");
const hairColor = prompt("Enter Hair Color");
// const arr = [name1, age, hairColor];

if (name1 !== "") {
  arr.push(name1);
}
if (age !== "") {
  arr.push(age);
}
if (hairColor !== "") {
  arr.push(hairColor);
}

const del = prompt("Delete last Element?");

if (del == "yes") {
  arr.pop();
}
alert(arr);
*/

const arr = [];
const arr2 = [1, 2, 3];
const arr3 = [3, 4, 5, ["Hello"]]; // 2 dimensional Array

arr.push(arr2);
arr.push(arr3);

console.log(arr[1][3][0]); // logs "Hello"

/*
// Lesson 1
const person = {
  name1: "tim",
  children: [{ name1: "joe" }, { name1: "sally" }],
};

// console.log("name1" in person);

// Using "in" not "of" for objects
// for (const value of Object.keys(person)) {
//   console.log(value);
//   //console.log(person[property]);
// }

// Another name or reference for person obj
const p1 = person;
const p2 = person;

delete p1.name1; // Affects all objects
console.log(person, p1, p2);
*/

const obj = {
  name: "tim",
  nums: [1, 2, 3],
};

// "..." spread operator - copies another obj
const obj2 = { ...obj, age: 2 };

console.log(obj);
console.log(obj2);

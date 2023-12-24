/*
// Set only contains unique elements
const s = new Set([1, 2, 3, 4, 4, 3, 2, 1]);
s.add(-1);
s.delete(4);

console.log(s.has(3));

// for (const num of s) {
//   console.log(num);
// }
*/

/*
// Inefficient way of checking for dupes if the
// array is very large
const arr = [1, 3, 4, 5, 2, 1, 31, 2];

for (const [idx, value] of arr.entries()) {
  for (const value2 of arr.slice(idx + 1)) {
    if (value == value2) {
      console.log("Found dupe of:", value);
      break;
    }
  }
}
*/

/* 
// Much faster way of checking for dupes
const arr = [1, 3, 4, 5, 2, 1, 31, 2];
const num = new Set();

for (const value of arr) {
  if (num.has(value)) {
    console.log("Found dupe of:", value);
  }
  num.add(value);
}
*/

const arr = [1, 3, 4, 5, 2, 1, 31, 2];
const num = new Set(arr);
const uniqueNumbers = Array.from(num);

console.log(uniqueNumbers);

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

// MAPS

/*
const m = new Map();
// Map - Key, Value
m.set("a", 3);
m.set("b", 2);
m.set("a", 4);

console.log(m.get("a"));
*/

/*
// Instead of doing a map
const str = "Hello world my name is Micah";
const freq = [];

for (const char of str) {
  let found = false;
  for (const [idx, pair] of freq.entries()) {
    const [key, value] = pair;
    if (key == char) {
      freq[idx] = [char, value + 1];
      found = true;
      break;
    }
  }
  if (!found) freq.push([char, 1]);
}

console.log(freq);
*/

// Using a map
const str = "Hello world my name is Micah";
const freq = new Map();

for (const char of str) {
  if (freq.has(char)) {
    freq.set(char, freq.get(char) + 1);
  } else {
    freq.set(char, 1);
  }
}

console.log(freq.get(" "));

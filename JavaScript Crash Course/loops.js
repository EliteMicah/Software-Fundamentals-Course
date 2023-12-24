/*
const numberElements = Number(prompt("Enter a number 1-10"));

if (numberElements >= 1 && numberElements <= 10) {
  const list = document.getElementById("list");

  for (let i = 0; i < numberElements; i++) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(i.toString()));
    list.appendChild(li);
  }
} else {
  alert("Not valid Input");
}
*/

const str = prompt("Enter a string of characters: ");
const target = "!";

for (let i = 0; i < str.length; i++) {
  const char = str[i];
  if (char == target) {
    alert(`we found the ${target} in ${i + 1} characters`);
    break;
  }
}


/*
// Lesson 2
const strs = ["one", "two", "three"];
const str = ["hello world"];

// for (auto x : val) type of loop
for (const str of strs) {
  console.log(str);
}

for (const [i, str] of strs.entries()) {
  console.log(i, str);
} // logs the index with the string

const [str1, str2, str3] = strs;
console.log(str1, str2, str3);

for (const char of str) {
  console.log(char);
}
*/

// Lesson 3
const matrix = [];
// for (let i = 0; i < 3; i++) {
//   const numbers = [];

//   // Runs only 3 times
//   for (let j = i * 3; j < i * 3 + 3; j++) {
//     numbers.push(j + 1); // 9 times
//   }
//   matrix.push(numbers); // 3 times
// }

for (let i = 0; i < 2; i++) {
  const arr = [];

  // Runs only 6 times
  for (let j = 0; j < 3; j++) {
    const numbers = [];
    const start = i * 6 + j * 2 + 1;

    for (let k = start; k < start + 2; k++) {
      numbers.push(k);
    }

    arr.push(numbers);
  }

  matrix.push(arr);
}

console.log(matrix);


/*
// Lesson 4
let num;

do {
  num = Number(prompt("Enter a num 1-10"));
} while (!(num >= 1 && num <= 10));

console.log(num);
*/

while (true) {
  const num = Number(prompt("Enter a num 1-10"));
  if (num >= 1 && num <= 10) break;
}

console.log(num);

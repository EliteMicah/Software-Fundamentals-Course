/*
// Lesson 1
function add(x, y) {
  console.log(x + y);
}

add(10, 8);
add(5, 8);

function math(a1, a2, num = 1) {
  console.log(a1 * a2 * num);
}

math(10, 20);
math(-10, 10, -1);

function math(a1, a2, num = 1) {
  return [a1 ** 2, a2 ** 2];
}

const [result, result2] = math(10, 20);
console.log(result, result2);
*/

// Lesson 2
function removeAllChars(arrayOfStrings, charactersToRemove) {
  const newArray = [];

  if (charactersToRemove.length == 0) return;

  for (const str of arrayOfStrings) {
    let newStr = "";
    for (const char of str) {
      if (charactersToRemove.includes(char)) {
        continue; // Continue skips the next line
      }
      newStr += char;
    }
    newArray.push(newStr);
  }
  return newArray;
}

const result = removeAllChars(
  ["hello world", "1234", "I am amazing", "yes"],
  ["e", "2", "t"]
);
console.log(result); // Logs [ 'hllo world', '134', 'I am amazing', 'ys' ]

/*
// Lesson 1
const name1 = "Tim";
const str = `hello ${name1} world`; // Back tick allows JavaScript inside string
//const str2 = "Hello " + name1 + " world"; // Same thing but slower

console.log(str);
*/

// Lesson 2
const str = "Hello World my name is Micah";
// const str2 = str.slice(6, 8); // wo
// const str2 = str.replace("Hello", "!"); // Replaces "Hello" with "!"
// const str2 = str.replaceAll("l", "!"); // Replaces all l's with "!"
// if (str.toLowerCase() == "yes") console.log("Yes");
// const str2 = str.trim(); // Removes whitespace char's from end / beginning .trimEnd()
const arr = str.split(" "); // Looks for words before and after spaces
// const arr = str.split(","); // Looks for words before and after commas

console.log(str);
console.log(arr);

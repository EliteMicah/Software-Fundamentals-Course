let counter = 0;
const arr = [];

while (counter < 3) {
  const userInput = Number(prompt("Enter a random whole number"));
  arr.push(userInput);
  counter++;
}

const max = Math.max(...arr);

alert("The largest number was: " + max);

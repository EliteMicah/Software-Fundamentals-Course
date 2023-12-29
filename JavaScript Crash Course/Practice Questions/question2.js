/*
Example: 
~Program asks for number 1~ 
~User enters 1~ 
~Program asks for number 2~ 
~User enters -3~ 
~Program asks for number 3~ 
~User enters -5~ 
~Program shows an alert saying “The largest number was: 1”~ 
*/

let counter = 0;
const arr = [];

while (counter < 3) {
  const userInput = Number(prompt("Enter a random whole number"));
  arr.push(userInput);
  counter++;
}

const max = Math.max(...arr);

alert("The largest number was: " + max);

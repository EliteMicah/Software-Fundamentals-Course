// const num = Math.random(); // Random decimal number
// const num = Math.round(Math.random() * 10); // Whole number
// const num = 10 + Math.round(Math.random() * 10); // Whole number between 10-20
// console.log(num);

/*
const num = randomNum(20, 80);
console.log(num);
*/

let num = randomNum(1, 100);
let numGuesses = 0;

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function makeGuess() {
  const guessInput = document.getElementById("guess");
  const guess = Number(guessInput.value);
  guessInput.value = "";
  const feedback = document.getElementById("feedback");

  numGuesses++;
  document.getElementById("num-guesses").innerHTML = numGuesses;

  if (guess == num) {
    feedback.innerHTML = "You Guessed it!";
    num = randomNum(1, 100);
    reset();
  } else if (guess > num) {
    feedback.innerHTML = "It is lower. Try again";
  } else if (guess < num) {
    feedback.innerHTML = "It is higher. Try again";
  } else {
    feedback.innerHTML = "Try again";
  }
}

function reset() {
  let num = randomNum(1, 100);
  let numGuesses = 0;
  document.getElementById("num-guesses").innerHTML = 0;
}

/*
Write a function that accepts a plain text password and returns the relative strength of the
password based on the following criteria.
Types of Passwords:
- Weak Password: 0 - 2 points.
- Medium Password: 3 points.
- Strong Password: 4 points.
- Very Strong Password: 5 Points.
Criteria For Points:
- Length: 1 point if more than 10 characters
- Capital letters: 1 point if at least 1 capital letter is present
- Lowercase letters: 1 point if at least 1 lowercase letter is present
- Numbers: 1 point if at least 1 number is present
- Special characters: 1 point if any of the following characters are present: %, ^, &, *, (, ),
@, !, #, $ (i.e all the special characters accessible from the number keys 1, 2, 3, 4... etc)
Your function should return “weak”, “medium”, “strong” or “very strong” to classify the given
password.
*/

const prompt = require("prompt-sync")();

const userPassword = prompt("Enter password: ");
let points = 0;

passwordStrength(userPassword);

function passwordStrength(userPassword) {
  let capital = false;
  let lowercase = false;
  let number = false;
  let special = false;
  const specialCharacters = "!@#$%^&*()_+[]{}|;:'\",.<>?/`~\\-=";

  if (userPassword.length > 10) {
    points++;
  }

  for (let i = 0; i < userPassword.length; i++) {
    if (userPassword[i] >= "A" && userPassword[i] <= "Z") {
      capital = true;
    }
    if (userPassword[i] >= "a" && userPassword[i] <= "z") {
      lowercase = true;
    }
    if (userPassword[i] >= "0" && userPassword[i] <= "9") {
      number = true;
    }
    if (specialCharacters.includes(userPassword[i])) {
      special = true;
    }
  }

  if (capital) {
    points++;
  }
  if (lowercase) {
    points++;
  }
  if (number) {
    points++;
  }
  if (special) {
    points++;
  }
}

switch (points) {
  case 0:
    console.log("Weak Password | ", points);
    break;
  case 1:
    console.log("Weak Password | ", points);
    break;
  case 2:
    console.log("Weak Password | ", points);
    break;
  case 3:
    console.log("Medium Password | ", points);
    break;
  case 4:
    console.log("Strong Password | ", points);
    break;
  case 5:
    console.log("Very Strong Password | ", points);
    break;
}

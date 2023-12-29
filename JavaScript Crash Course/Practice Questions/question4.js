let userString = "coursecareers";
const delimiter = "|";
// const spacing = 3;

let newString = "";

for (let i = 0; i < userString.length; i++) {
  if (i % 1 == 0 && i != 0) {
    newString += delimiter;
  }
  newString += userString[i];
}

console.log(newString);

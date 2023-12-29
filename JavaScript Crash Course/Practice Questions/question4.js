/*
Example 1: 
Target = “timisgreat” 
Delimiter = “-” 
Spacing = “3” 
~Program prints: “tim-isg-rea-t”~ notice the - exists after 3 characters

Example 2: 
Target = “coursecareers” 
Delimiter = “|” 
Spacing = “1” 
~Program prints: “c|o|u|r|s|e|c|a|r|e|e|r|s”~ 
*/

let userString = "coursecareers";
const delimiter = "|";
const spacing = 1;

let newString = "";

for (let i = 0; i < userString.length; i++) {
  if (i % spacing == 0 && i != 0) {
    newString += delimiter;
  }
  newString += userString[i];
}

console.log(newString);

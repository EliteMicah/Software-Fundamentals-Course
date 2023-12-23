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

const country = prompt("What country");

if (country == "CA" || country == "Cananda") {
    const age = prompt("Please enter your age: ");
    if (age >= 18) {
        const color = prompt("Enter fav color");
        const text = document.getElementById("color");
        text.innerHTML = color;
        text.style = "color: " + color;
        if (color == "green") {
            alert("No way! Mee too!");
        }
    } else {
        alert("Thanks");
    }
} else {
    alert("Thanks but we no need u");
}

/*
const color = prompt("Enter fav color");

switch (color) {
    case "red": 
        alert("red");
        break;
    case "blue":
        alert("blue");
        break;
    case "orange":
        alert("orange");
        break;
    case "yellow":
        alert("yellow");
        break;
    default:
        alert("Unknown Color");
        break;
}
*/

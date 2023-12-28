/*
// Lesson 1
function enterUsername(e) {
  //const username = document.getElementById("username").value;
  //document.getElementById("text").innerHTML = username;
  //alert("You entered " + username);
  e.value = "";
  alert(e);
}
*/

/*
// Lesson 2
const person = {
  name: "Tim",
  lastName: "Ruscica",
  getName: function () {
    console.log(this.name + this.lastName);
  },
};

person.getName();

function test() {
  console.log("test");
}

// Giving the test function another name basically
// Referencing the test function
const v = test;
v();
*/

function test() {
  console.log(this);
}

test();

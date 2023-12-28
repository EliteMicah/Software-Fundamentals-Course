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

/*
// Lesson 3
//const func = (x, y) => x + y;
const func = (x, y) => ({ x: x, y: y });

const result = func(1, 2);
console.log(result);
*/

// Lesson 4
function getName() {
  return this.firstName + " " + this.lastName;
}

// "this" accesses the global object
const getName = () => {
  return this.firstName + " " + this.lastName;
};

const person = {
  firstName: "Tim",
  lastName: "Ruscica",
  getName: getName,
};

const person2 = {
  firstName: "Joe",
  lastName: "Smith",
  getName: getName,
};

const personName = person.getName();
console.log(personName);

const personName2 = person2.getName();
console.log(personName2);

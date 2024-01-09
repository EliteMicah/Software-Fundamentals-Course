class Person {
  name;
  age;

  /* // Helps with this.name this.age
  // constructors run everytime you create an object
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  */

  sayHi(shouldSayBye) {
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
    if (shouldSayBye) {
      console.log("Bye");
    }
  }
}

// "person" is now an object of the type "Person" class
const person = new Person("Tim", 10);
person.color = "red";
const person2 = new Person("Joe", 12);

console.log(person.color);
// person.sayHi(false);
// person2.sayHi(true);

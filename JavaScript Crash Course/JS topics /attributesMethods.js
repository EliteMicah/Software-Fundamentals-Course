class Teacher {
  name;
  age;
  // '#' salary is private
  #salary;

  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    // private
    this.#salary = salary;
    console.log(this.#getSalary2());
  }

  // Must call this function to get access to salary
  getSalary() {
    return this.#salary;
  }

  // Makes the function private and only able to be called
  // within this class
  #getSalary2() {
    return this.#salary;
  }

  setSalary(newSalary) {
    if (newSalary <= 0) {
      throw Error("Invalid salary, must be above 0");
    }
    this.#salary = newSalary;
  }
}

const teacher = new Teacher("Joe", 24, 65000);
//teacher.setSalary(-10);

// "static" lesson
class Person {
  name;
  // Static is associated with the class not the instance
  static numberOfPeople = 0;

  constructor(name) {
    this.name = name;
    // "this" does not work with static in js
    Person.numberOfPeople++;
  }

  static getNumberOfPeople() {
    // "this" does work when inside a static function
    if (this.numberOfPeople >= 10) this.removePerson();
    return this.numberOfPeople;
  }

  static removePerson() {
    this.numberOfPeople--;
  }

  // static doesn't need it to be related to the instance
  // static can be related to class
  // This class relies on that static function to be used inside of here
  static calculator(n) {
    return n ** 2;
  }
}

const p = new Person("Tim");
const p2 = new Person("Joe");
Person.removePerson();
console.log(Person.getNumberOfPeople());

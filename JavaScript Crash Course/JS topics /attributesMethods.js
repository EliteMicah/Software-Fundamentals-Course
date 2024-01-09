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

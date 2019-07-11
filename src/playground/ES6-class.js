class Person {
  constructor(name='Anon', age=0) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hi, I am ${this.name}.`
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}


class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major
  }
  hasMajor() {
    return !!this.major;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  greet() {
    let greeting = super.greet();

    if (this.homeLocation) {
      greeting += ` I'm from ${this.homeLocation}.`
    }
    return greeting;
  }
}

const me = new Traveler('Ivan', 23, 'NYC');
console.log(me.greet());

const other = new Traveler();
console.log(other.greet());

'use strict';


///////////////////////////////////////
// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this!
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// jonas.calcAge(); // 46 (2037 - 1991)
// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);

// console.log(jonas.__proto__); // Person.prototype
// console.log(jonas.__proto__.__proto__); // Object.prototype
// console.log(jonas.__proto__.__proto__.__proto__); // null

// console.log(jonas instanceof Person);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));


// Person.hey = function () {
//   console.log('Hey there 👋');
//   console.log(this);
// };


// Person.hey();


// // .prototyeOfLinkedObjects

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));


// Prototypal Inheritance on Built-In Objects

console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);


const Car = function ( make, speed ) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}`);
}

Car.prototype.break = function() {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
}

const bmw = new Car("BMW", 120);

const mercedes = new Car("Mercedes", 95);

bmw.accelerate();
bmw.accelerate();
bmw.break();
bmw.accelerate();



// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration


class PersonCl2 {

  constructor( fullName, birthYear ) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log( 2037 - this.birthYear );
  }

  get age() {
    return 2037 - this.birthYear;
  }

  greet() {
    console.log( `Hey ${this.fullName}`);
  }

  set fullName(name) {
    if(name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName; 
  }

  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl2("Farid Mia", 1997 );
console.log(jessica);
jessica.calcAge();
console.log( jessica.age );


console.log(jessica.__proto__ === PersonCl2.prototype);

// PersonCl.prototype.greet = function() {
//     console.log(`Hey ${this.firstName}`);
// };

PersonCl2.prototype.greet = function() {
  const firstName = this.fullName.split(' ')[0];
  console.log(`Hey ${firstName}`);
};

jessica.greet();

const walter = new PersonCl2('Walter White', 1965);
PersonCl2.hey(); // static method only class thake e call kora jai but object thake call kora jai na


// getter and setter

const account = {
  owner: 'Jonas',
  movements: [200,300, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  }
}

console.log( account.latest );

account.latest = 50;

console.log(account.movements);


// object create 

const PersonProto = {

  calcAge() {
    console.log( 2037 - this.birthYear );
  },

  init( firstName, birthYear ) {
      this.firstName = firstName;
      this.birthYear = birthYear;
  }
};


const steven = Object.create(PersonProto); // object thake sorasori prototype chain create korte use hoi
steven.init("steven",1997);
console.log(steven);

steven.name = "Steven";
steven.birthYear = '2002';


steven.calcAge();

console.log( steven.__proto__ === PersonProto ); // output true

const sarah = Object.create(PersonProto);

sarah.init("Sarah",1997);

console.log(sarah);

sarah.calcAge();


class CarCl {
    constructor( make, speed ) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    get speedUS() {
      return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = this.speed * 1.6;
    }
    
}


const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);


const  Person2 = function( firstName, birthYear ) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person2.prototype.calcAge = function() {
  console.log( 2037 - this.birthYear );
}

// linking prototype 

const Student = function( firstName, birthYear, course ) {
    Person2.call( this, firstName, birthYear );
    this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);


Student.prototype.introduce = function() {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
// mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);


// Inheritance Between "Classes": ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // instance method

  calcAge() {
    console.log( 2027 - this.birthYear );
  }

  greet() {
      console.log( `Hey this is ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName( name ) {
      if(name.includes(" ")) this._fullName = name;
      else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there 👋');
  }
  
}

class StudentCl extends PersonCl {
    constructor( fullName, birthYear, course ){
        super( fullName, birthYear);
        this.course = course;
    }

    introduce() {
      console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    calcAge() {
      console.log(
        `I'm ${
          2037 - this.birthYear
        } years old, but as a student I feel more like ${
          2037 - this.birthYear + 10
        }`
      );
    }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();




const PersonProtoUpdate = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven3 = Object.create(PersonProtoUpdate);

const StudentProto = Object.create(PersonProtoUpdate);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProtoUpdate.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  // BUG in video:
  // console.log(`My name is ${this.fullName} and I study ${this.course}`);
  
  // FIX:
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();  


const PersonProto2 = {

  calcAge() {
      console.log( 2037 - this.birthYear );
  },

  init( firstName, birthYear ) {
      this.birthYear = birthYear;
      this.firstName = firstName;
  }
}

const personobj22 = Object.create(PersonProto2);

const StudentProto2 = Object.create(PersonProto2);

StudentProto2.init = function( firstName, birthYear, course ) {
  personobj22.init.call( this, firstName, birthYear );

  this.course = course;
}


StudentProto2.introduce = function() {

  console.log(`my name is ${this.firstName} and I am study ${this.course}`);
}


const jay2 = Object.create(StudentProto2);

jay2.init("jay", 2025, "Computer Science");

jay2.introduce();
jay2.calcAge();
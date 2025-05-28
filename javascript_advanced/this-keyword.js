const { bindKey } = require("lodash");

console.log(this);
const player = {
  name: "Sakep",
  score: 100,
  showScore() {
    console.log(this.name);
  },
};

player.showScore();

class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  showDetails() {
    console.log(this.name);
    console.log(this.level);
  }
}

const gamer = new Player("Alex", 5);
gamer.showDetails();

// function doSomething(number) {
//   console.log(this);
// }
// doSomething();

function Person(name) {
  return (this.name = name);
}

let objcreate = new Person("Farid Mia");

console.log(objcreate.name);

document.getElementById("get-user").addEventListener("click", function () {
  console.log(this);
});

// const person = {
//   name: "John",
//   greet: function (this) {
//     return `Hello, I am ${this.name}`;
//   },
// };

// console.log(person.greet());

const student = {
  name: "Learner",
  getThis() {
    console.log(this);
  },
};

student.getThis();

let manager = {
  name: "Rasel",
  assignWork: function () {
    this.task = {
      type: "Frontend",
      showTask: function () {
        console.log(this.type);
      },
    };

    this.task.showTask();
  },
};

manager.assignWork();

const tina = {
  name: "Tina",
  salary: 20000,
  getInfo() {
    console.log(`${this.name} salary: ${this.salary}`);
  },
};
tina.getInfo();

const soma = {
  name: "Soma",
  salary: 25000,
};

let somaBind = tina.getInfo.bind(soma);

somaBind();

const mona = {
  name: "Mona",
  salary: 35000,
};

tina.getInfo.call(mona);

const dina = {
  name: "Dina",
  salary: 45000,
};

tina.getInfo.apply(dina);

const team = {
  name: "jahid",
  players: 11,
  play: function () {
    console.log(`my name is ${this.name} and player ${this.players}`);
  },
};

team.play();

const tournament = {
  name: "faruk",
  players: 15,
  play: function () {
    console.log(`my name is ${this.name} and player ${this.players}`);
  },
};

const bindtournament = team.play.bind(tournament);

bindtournament();

const car = {
  speed: "1.2km",
  price: 300,
  drive: function () {
    console.log(`speed ${this.speed} and price ${this.price}`);
  },
};

car.drive();

const bike = {
  speed: "2.2km",
  price: 500,
};

const truck = {
  speed: "0.8km",
  price: 800,
};

car.drive.call(bike);
car.drive.call(truck);

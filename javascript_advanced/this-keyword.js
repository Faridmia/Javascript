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

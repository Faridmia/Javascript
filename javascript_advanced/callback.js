

function processUserInput( callback ) {
    const name = "farid mia";

    callback(name);
}

function greetUser( name ) {
    console.log("hello " + name );
}

processUserInput(greetUser);

let global = "I am global";
function test() {
  let local = "I am local";
  console.log(global);
}


test();

console.log(a); // undefined
var a = 10;


function outer() {
    let count = 0;

    return function() {
        count++;
        return count;
    }
}

const counter = outer();

console.log(counter());
console.log(counter());
console.log(counter());


async function getTodos() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();

        console.log(data);

        return data;
    } catch (e) {
        console.log(e)
    }
}

const todos = getTodos();


(async function () {
    const data = await getTodos();
    data.forEach( element => {
        console.log(`id: ${element.id} title: ${element.title} completed: ${element.completed}`);
    });
})();

function Car( brand, model ) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function() {
    return `${this.brand} - ${this.model}`;
}
  
Car.prototype.startEngine = function() {
    return `${this.brand} engine started`;
}
  


const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Tesla", "Model 3");
  
console.log(car1.getDetails()); 
console.log(car2.startEngine()); 
  
// class Player {
//   constructor(name, runs, wickets) {
//     this.name = name;
//     this.runs = runs;
//     this.wickets = wickets;
//   }
// }

// $p1 = new Player("tom", 102, 5);

// console.log($p1);

class FoodOrder {
  constructor(customer, food, price) {
    this.vendor = "panda";
    this.customer = customer;
    this.food = food;
    this.price = price;
  }
}

const order1 = new FoodOrder("Mizan", "Pizza", 1500);
const order2 = new FoodOrder("Azim", "Burger", 1000);
console.log(order1 instanceof FoodOrder);
console.log(order2);

class Player {
  constructor(name, runs, wickets) {
    this.name = name;
    this.runs = runs;
    this.wickets = wickets;
  }

  getRun() {
    return this.runs;
  }

  addRun(run) {
    this.runs = this.runs + run;
  }
}

const player1 = new Player("Tamim", 5000, 100);
const tamimRun = player1.getRun();
player1.addRun(200);
player1.addRun(50);
console.log(tamimRun);
console.log(player1);

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount) {
    if (this.balance > amount) {
      this.balance -= amount;
      return amount;
    } else {
      return "insufisent balance";
    }
  }
}

const bank = new BankAccount("farid mia", 20000);

bank.deposit(10000);
let result = bank.withdraw(20000000);

console.log(result); // Parent Class

class Gadget {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
} // Child Class: Laptop

class Laptop extends Gadget {
  constructor(brand, model, price, keyboardLight) {
    super(brand, model, price);
    this.keyboardLight = keyboardLight;
  }
}

const myLaptop = new Laptop("Dell", "XPS 15", 1500, true);
console.log(myLaptop.brand);
console.log(myLaptop.model);
console.log(myLaptop.price);
console.log(myLaptop.keyboardLight);

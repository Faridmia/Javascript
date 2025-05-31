class Player {
  constructor(name, runs, wickets) {
    this.name = name;
    this.runs = runs;
    this.wickets = wickets;
  }
}

$p1 = new Player("tom", 102, 5);

console.log($p1);

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

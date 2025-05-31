const mouse = {
  name: "Jerry not Tom",
  toString: function () {
    return `this is a mouse name ${this.name}`;
  },
};

console.log(mouse.toString());

console.log(mouse.__proto__);
console.log(mouse.__proto__.__proto__);

class Vehicle {
  constructor(brand, model, fuelType) {
    this.brand = brand;
    this.model = model;
    this.fuelType = fuelType;
  }
} // Child Class: Bus

class Bus extends Vehicle {
  constructor(brand, model, fuelType, capacity) {
    super(brand, model, fuelType);
    this.capacity = capacity;
  }
}
const cityBus = new Bus("Volvo", "B11R", "Diesel", 50);
const proto1 = Object.getPrototypeOf(cityBus);
console.log(proto1);
const proto2 = cityBus.__proto__;
console.log(proto2);

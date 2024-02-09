// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

console.log(fruits.get("apples"));
console.log(fruits.get("bananas"));


const river = new Map();

river.set("padma","elish");
river.set("meghna","ball");
river.set("jomuna","pabna");
river.set("kornofuly","puty");

console.log(river.get("padma"));


const fruits2 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

fruits2.clear();

console.log(fruits2.size);

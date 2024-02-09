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

const fruits3 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

let text = "";
fruits3.forEach(function(key,value) {
    text += key + "=" + value + "\n";
});

console.log(text);

const fruits4 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

let data = "";

for( const m of fruits4.entries() ) {
    data += m + "\n";
}

console.log(data);

const fruits5 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

let txt2 = "";
for(const x of fruits5.keys() ) {
    txt2 += x + "\n";
}

console.log(txt2);

let txt3 = "";
for(const x of fruits5.values() ) {
    txt3 += x + "\n";
}

console.log(txt3);
  
const fruits = new Map();


// 

fruits.set("apple",500);

fruits.set("banana",700);
fruits.set("mango",300);



console.log(fruits.get('apple'));


const fruits2 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

text2 = "";
fruits2.forEach(function(value,key) {
    text2 += key + "=" + value + "\n";
});

console.log(text2);
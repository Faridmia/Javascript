// console.log(x); // Output: undefined
// var x = 10;

var x;
console.log(x); // Output: undefined
x = 10;


bar(); // TypeError: bar is not a function
var bar = function() {
    console.log("Hello from bar!");
}

var bar2;
bar2(); // TypeError: bar is not a function
bar2 = function() {
    console.log("Hello from bar!");
}


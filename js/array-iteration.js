const numbers = [45, 4, 9, 16, 25];

txt = '';

numbers.forEach(function(value, index, array) {
    txt += value + "\n";
});

console.log(txt);


const numbers1 = [45, 4, 9, 16, 25];

const number2 = numbers1.map(myFunction);

function myFunction(value, index, array ) {
    return value * 2;
}

console.log(number2);

const myArr = [1, 2, 3, 4, 5,6];
const newArray = myArr.flatMap( (x) => x * 2 );

console.log(newArray);

const numbers2 = [45, 4, 9, 16, 25];
const over18 = numbers2.filter(myFunction2);

function myFunction2(value,index,array) {
    return value > 18;
}

console.log(over18);


const numbers4 = [45, 4, 9, 16, 25];
let sum = numbers4.reduce(myFunction);


function myFunction(total,value,index,array) {
    return total + value;
}
console.log(sum);

const numbers6 = [45, 4, 9, 16, 25];
let sum2 = numbers6.reduce(myFunction4, 100);

function myFunction4(total, value) {
  return total + value;
}
console.log(sum2);


const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits4.keys();

for( let x of keys ) {
    txt += x + "\n";
}

console.log(txt);


const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits5.entries();

for (let y of f ) {
  txxt = y + "\n";
  console.log(txxt);
}


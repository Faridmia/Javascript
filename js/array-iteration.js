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
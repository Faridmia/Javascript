let numbers = [1,2,3,4,5];

let spread = [...numbers,6,7,8,9];

let a = [...numbers];

numbers.push(10,11);

console.log(a);

let num1 = [1,2];

let num2 = [3,4];

let num3 = [...num1,...num2];

console.log(num3);



const fruits2 = ["Banana", "Orange", "Apple"];
document.getElementById("demo8").innerHTML = fruits2;

function myFunction() {
    //fruits2.push("juice");
    fruits2[fruits2.length] = "juice";

    document.getElementById("demo8").innerHTML = fruits2;
}


const fruits4 = ["Banana", "Orange", "Apple"];
fruits4[6] = "Lemon";  // Creates undefined "holes" in fruits


flength = fruits4.length;

let text3 = "<ul>";

for (let m = 0;m<flength;m++) {
    text3 += "<li>" + fruits4[m] + "</li>";
}

text3 += '</ul>';

document.getElementById("demo9").innerHTML = text3;


const fruits6 = ["Banana", "Orange", "Apple3", "Mango"];
let fruit6 = fruits6.at(2);

console.log(fruit6);

const fruits7 = ["Banana", "Orange", "Apple", "Mango"];

let data = fruits7.join(" * ");

console.log(data);

const fruits8 = ["Banana", "Orange", "Apple", "Mango"];

fruits8.unshift("Lemon");

console.log(fruits8);


const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
fruits9[fruits9.length] = "Kiwi";

console.log(fruits9);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

console.log(myChildren);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];

let three_element = arr1.concat( arr2, arr3 );

console.log(three_element);

const fruits10 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits10);

fruits10.splice(2, 0, "Lemon", "Kiwi"); 

console.log(fruits10);


// array indexof

const fruits11 = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits11.indexOf("Apple") + 1;

console.log(position);


const fruits12 = ["Apple", "Orange", "Apple", "Mango"];
let position2 = fruits12.lastIndexOf("Apple") + 1;

console.log(position2);


const fruits14 = ["Banana", "Orange", "Apple", "Mango"];

fruits14.includes("Mango"); // is true

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value,index,array ) {
    return value > 18;
}

console.log(first);
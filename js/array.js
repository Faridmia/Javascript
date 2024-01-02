


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
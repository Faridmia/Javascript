const person = {
    name: "John",
    age: 30,
    city: "New York"
};

let myarray = Object.values(person);

document.getElementById('demo').innerHTML = myarray;


const person3 = {
    name: "John",
    age: 30,
    city: "New York"
};
  
let myString = JSON.stringify(person3);

// document.getElementById('demo').innerHTML = myString;


const person5 = {
    name: "John",
    age: function () {return 30;}
};

person5.age = person5.age.toString();

let mystring = JSON.stringify(person5);


// document.getElementById('demo').innerHTML = mystring;



const arr2 = ["John", "Peter", "Sally", "Jane"];

let myString3 = JSON.stringify(arr2);
// document.getElementById("demo").innerHTML = myString3;

document.getElementById('demo').innerHTML = myString3;


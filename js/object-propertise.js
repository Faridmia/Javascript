const obj_propertise = {
    fname:" John",
    lname:" Doe",
    age: 25
};

obj_propertise.nationality = "English";

delete obj_propertise.age;

let txt = "";
for( let x in  obj_propertise) {
     txt += obj_propertise[x]+"\n";
     
}

console.log(txt);


let myObj = {
    name:"John",
    age:30,
    cars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
}


let obj_v1 = myObj.cars.car1; 
let obj_v2 = myObj.cars['car2']; 
let obj_v3 = myObj.cars['car3']; 

console.log(obj_v1);
console.log(obj_v2);
console.log(obj_v3);


let x2 = "";
const myObj2 = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}


for(let i in myObj2.cars ) {
    x2 += myObj2.cars[i].name + "\n";

    for(let j in myObj2.cars[i].models ) {
        x2 += myObj2.cars[i].models[j] + "\n";
    }
}

console.log(x2);
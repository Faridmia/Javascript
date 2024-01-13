const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];


console.log(animals.slice(2)); // 2 number position thake start hobe and element gula show korbe anothers gula remove hobe

console.log(animals.slice(2,4)); // camel,duck 
console.log(animals.slice(-2)); // duck,elephant
console.log(animals.slice(2,-1)); // camel,duck


// Using slice, create newCar from myCar.
const myHonda = {
    color: "red",
    wheels: 4,
    engine: { cylinders: 4, size: 2.2 },
};
const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];

console.log(myCar[0]['engine']['cylinders']);
const newCar = myCar.slice(0, 2);

console.log(newCar);

console.log("myCar[0].color=" , myCar[0].color);
console.log("myCar[0].color=" , newCar[0].color);
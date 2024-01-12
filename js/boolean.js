const x1 = new Boolean(false);
const y1 = new Boolean(false);

const z1 = x1 == y1;  /// Comparing two JavaScript objects always return false.

console.log(z1);

let booldata = "2" > "12";

console.log(booldata);

let name = null;
let text22 = "missing";
let result = name ?? text22;

console.log(result);

const carmodel = {type:"Fiat", model:"500", color:"white"};

let car22 = carmodel?.model;

console.log(car22);
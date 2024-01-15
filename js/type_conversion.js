console.log(Number("3.14") + "\n" +  
Number(Math.PI) + "\n" +
Number("    ") + "\n" + // 0
Number("") + "\n" + // 0
Number("99 88") + "\n" +  //NaN
Number("John") + "\n"); // NaN

let y = "5";
let xy = + y; // string convert to number

console.log(xy);

let x = 123;

console.log(x.toString() + "\n" +
   (123).toString() + "\n" +
   (100 + 23).toString());


console.log( 5 + null ); // 5
console.log("5" + null ); // 5null

console.log( "5" - 2 );

console.log("5" * "3");

console.log(Number("twenty")); // string text k number a convert kora jai na

console.log(Number([20 ]));

let num2 = { 
    firstname: "farid",
    lastname: 'mia'
}

console.log(Number(num2));
console.log(String(num2));

let undi = undefined;

// console.log(Number(undi));
console.log(String(undi));
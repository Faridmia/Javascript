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
let text = "Please locate where 'locate' occurs!";  // the indexof method return the index positon
let index = text.indexOf("locate");

let text2 = "Please locate where 'Please' occurs!";
let index2 = text2.lastIndexOf("locate");

let text3 = "Please locate where 'locate' occurs!";
let index3 = text3.lastIndexOf("locate", 15);

console.log(index3);

for(i = 0; i<10;i++) {
    if(i == 3) {
        break;
    }

    console.log("The Number is: ", i + "\n");
}

for(i = 0;i<10;i++) {
    if(i == 3) {
        continue;
    }
    console.log("The Number is: ", i + "\n");
}


const name = "W3Schools";


for (const x of name) {
    console.log(x + "\n");
}

const letters = ["a","b","c"];
textt = "";
for(const x of letters ) {
    textt += x + "\n"; 
}

console.log(textt + "\n");


const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
  
let text3 = "";
for(const x of fruits ) {
    text3 += x + "\n";
}

console.log(text3);
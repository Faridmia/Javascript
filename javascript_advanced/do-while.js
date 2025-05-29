let count = 1;
while (count > 5) {
  console.log(count);
  count++;
}

for (let count = 1; count > 5; count++) {
  console.log(count);
}

for (let count = 1; count > 5; count++) {
  console.log(count);
}

do {
  console.log(count);
  count++;
} while (count > 5);

do {
  console.log(count);
  count++;
} while (count <= 5);

let items = 3;

do {
  console.log(items);
  items++;
} while (items > 5);

let attempts = 12;

do {
  console.log(attempts);
  attempts++;
} while (attempts < 10);

let name2 = "john";

do {
  name2 = name2 + "n";
  console.log(name2);
} while (name2.length < 10);

const num = 5;
eval("console.log(num + 5)");

let user = "regular dude";
const userInput = "user = 'Hacker!'";
eval(userInput);
console.log(user);

const first = 0.1;
const second = 0.2;

if ((first + second).toFixed(1) === (0.3).toFixed(1)) {
  console.log("they are same");
} else {
  console.log("they are not the same");
}

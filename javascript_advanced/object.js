const computer = {
  brand: "lenovo",
  price: 35000,
  processor: "intel",
  ssd: "512gb",
};

console.log(Object.keys(computer));

let objValues = Object.values(computer);

console.log(objValues);

const profile = {
  name: "Rahim",
  age: 28,
  city: "Dhaka",
};

const profileKeys = Object.keys(profile);
const hasName = profileKeys.includes("name");
console.log(hasName);

if ("email" in profile) {
  console.log("email exist");
} else {
  console.log("email not exist");
}

if (profile.hasOwnProperty("email")) {
  console.log("emaill nea boroloki");
} else {
  console.log("emaill sara jibon..");
}

if (profile.city === "Dhaka") {
  console.log("Jam er sohor Dhaka.");
} else {
  console.log("Aram sob gram e.");
}

const person = {
  name: "Alice",
  age: 25,
  country: "Bangladesh",
};

const entries = Object.entries(person);
console.log(entries);

for (const key in profile) {
  const value = profile[key];
  console.log(key, value);
}

// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language;
    }
};

console.log(person.lang);

// setter an object

const person2 = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      return this.language = lang;
    }
};

person2.lang = "Bn";

console.log(person2.language);


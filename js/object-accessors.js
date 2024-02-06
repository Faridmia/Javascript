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


// const person3 = {
//     firstName: "John",
//     lastName: "Doe",
//     language: ""
    
// };

// Object.defineProperty ( person3 , "fullName" ,{
//     get: function () {
//         return this.language;
//     }
// });

// console.log(person3);

Object.defineProperty ( person3 , "fullName2" ,{
    set: function (lang) {
        return this.language = lang;
    }
});

person3.fullName = "pakistan";
console.log(person3);


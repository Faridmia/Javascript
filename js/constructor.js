function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

let obj1 = new Person("farid","mia","30","blue");

obj1.nationality = "English";

const myMother = new Person("Sally", "Rally", 48, "green");

console.log("My name is " + obj1.firstName + "age is " + obj1.age ) ;
console.log("My name is " + myMother.firstName + "age is " + myMother.age ) ;
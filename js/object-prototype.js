function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

Person.prototype.country = "Bangladesh";
let obj = new Person("farid","mia",30,"blue");

console.log("my name is" + " " + obj.firstName + "and my nationality " + obj.country);
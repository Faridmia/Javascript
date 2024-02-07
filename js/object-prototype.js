function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

Person.prototype.country = "Bangladesh";
let obj = new Person("farid","mia",30,"blue");

console.log("my name is" + " " + obj.firstName + "and my nationality " + obj.country);


function Person2(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

let obj2 = new Person2("hasan","sheikh",30,"blue");

Person2.prototype.name = function() {
    return "My name is " + this.firstName + " " + this.lastName;
}

console.log(obj2.name());
  
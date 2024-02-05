// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log( person.fullName() );

const person2 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
};

person2.name = function() {
    return this.firstName + " " + this.lastName;
}

console.log("My name is " + person2.name());


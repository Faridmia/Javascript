const person = {

    fullName: function () {
        return this.firstName + " " + this.lastName;
    }

}

const person1 = {
    firstName: "john",
    lastName: "Doe"
}

const perso2 = {
    firstName: "abdur",
    lastName: "rahim"
}

let data = person.fullName.call(person1);

console.log(data);
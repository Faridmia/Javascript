const person = {

    fullName: function (city,country) {
        return this.firstName + " " + this.lastName + " " + city + " " + country;
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

let data = person.fullName.apply(person1,["dhaka","bangladesh"]);

console.log(data);
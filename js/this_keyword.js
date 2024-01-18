const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());
console.log(person.firstName);

const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe",
}

console.log(person1.fullName.call(person2));

const person3 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"farid",
    lastName: "mia",
  }

  let fullName = person3.fullName.bind(member);

  console.log(fullName());
  
const number = [1,5,3,20,4,6];

// const result = number.find( item => {
//     return (item % 2 === 0 && item >= 0);
// });

// const result = number.findIndex( item => {
//     return (item % 2 === 0 && item >= 0);
// });

// console.log('Result => ', result );


// es6 introduction to classes

// function Person( name,birthYear ) {
//     this.name = name;
//     this.yearOfBirth = birthYear;

//     this.getDetails = function() {
//         return "Name: " + this.name + " and your age: " + ( 2022 - this.yearOfBirth );
//     }

// }

// var john = new Person('Farid Mia', 1997);

// console.log(john.getDetails());

class Person {
    constructor(name,birthYear ){
        this.name = name;
        this.yearOfBirth = birthYear;
    }

    getDetails = () => {
        return `Name: ${this.name} and Age: ${2022 - this.yearOfBirth}`;
    }
}



var john = new Person('Farid Mia', 1997);

console.log(john.getDetails());
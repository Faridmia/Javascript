class Person {
    constructor(name,birthYear ){
        this.name = name;
        this.yearOfBirth = birthYear;
    }

    getDetails = () => {
        return `Name: ${this.name} and Age: ${2022 - this.yearOfBirth}`;
    }
}



class Pilot extends Person {

    
    constructor( name,birthYear,exp,type,license ) {
        super(name,birthYear);
        this.experience = exp;
        this.type = type;
        this.license = license;
    }

    getData = () => {
        console.log(` ${this.getDetails()} and Experience ${this.experience} and type: ${this.type}`);
    }
}

const john = new Pilot("farid mia",1997,10,'private','TC1234');
const varName = new Pilot("Hasan",1997,10,'private','TC1234');

// console.log(john);

john.getData();
varName.getData();


class Car {
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
}

let obj = new Car("BMW", "2017");

// console.log(obj.name);
// console.log(obj.year);



class Car2 {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }

    age() {
        const currentdate = new Date();

        return currentdate.getFullYear - this.year;
    }
    

}

const obj2 = new Car2("BMW", 2017);

console.log("my car age is " + obj2.age() + "years old");
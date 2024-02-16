class Car {

    constructor(name,year) {
        this.name = name;
        this.year = year;
    }

    run(speed) {
        console.log( this.name + " is running in " + speed );
    }
}

let obj = new Car( "BMW", 2000 );
let audi = new Car( "audi", 2001 );

audi.run("200 km per hour");
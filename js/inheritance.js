class Car {

    constructor(brand) {
        this.carname = brand;
    }

    present() {
        return "I have a " + this.carname;
    }
}


class Model extends Car {
   
    constructor(brand,mod) {
        super(brand);
        this.model = mod;
    }

    show() {
        return this.present() + " it is a " + this.model;
    }
}

let obj = new Model("bmw", 2000);

console.log(obj.show());
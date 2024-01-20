class Student {
    constructor(name,age) {
        this.name = name;
        debugger;
        this.age  = age;
    }

    play(status) {
        debugger;
        console.log(`${this.name} age is ${this.age} and he is  playing ${status} `);
    }
}

const obj2 = new Student("hasan",30);
const obj = new Student("farid", 28);

obj2.play("well");
obj.play("well");


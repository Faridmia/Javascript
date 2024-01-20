let jsondata = '{ "employees":[' +
        '{"firstName":"John", "lastName":"Doe"},' +
        '{"firstName":"Anna", "lastName":"Smith"},' +
        '{"firstName":"Peter", "lastName":"Jones"}]}';

let data = JSON.parse(jsondata);
let data2 = data.employees[0];
let data3 = data.employees[0].firstName;
let data4 = data.employees[0].lastName;

console.log(data2);
console.log(data3);
console.log(data4);


let obj = {
    firstname: "farid",
    lastName: "mia"
}

const objstring = JSON.stringify(obj); // convert obj to string

console.log(objstring);
let data5 = JSON.parse(objstring);
console.log(data5.firstname);
console.log(data5.lastName);
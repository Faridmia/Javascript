// primitive

function changeValue(num) {
  num = 20;
  console.log("Inside function:", num);
}

let x = 10;
console.log("Before function call:", x);
changeValue(x);
console.log("After function call:", x);

// non - primitive

function updateJob(person) {
  person.job = "designer";
  console.log("Inside function:", person);
}

let employee = { job: "developer" };
console.log("Before function call:", employee);
updateJob(employee);
console.log("After function call:", employee);

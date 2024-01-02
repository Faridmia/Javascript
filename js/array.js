


const fruits2 = ["Banana", "Orange", "Apple"];
document.getElementById("demo8").innerHTML = fruits2;

function myFunction() {
    fruits2.push("juice");

    document.getElementById("demo8").innerHTML = fruits2;
}
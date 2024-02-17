let element = document.querySelector("#eventhandleer");
let mycontainer = document.querySelector("#mycontainer");

// element.addEventListener("click",function() {
//     console.log("clicked me");
// });

// element.addEventListener("mouseover",function() {
//     console.log("mouse over me");
// });

// element.addEventListener("mouseout",function() {
//     console.log("mouse out");
// });

mycontainer.addEventListener("click",function() {
    console.log("my div data");
},true ); // capture true

function myFunc(text) {
    console.log(text);
}


element.addEventListener("click",function() {
    myFunc("my function data");
},true );
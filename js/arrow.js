hello = () => {
    return "hello world";
}

console.log(hello());

let parameter = "";
parameter = (value) => "Hello " + value;

console.log(parameter("universal"));

let parameter2 = "";
parameter2 = value => "Hello " + value;

console.log(parameter2("bangladesh"));


hello3 = function() {
    document.getElementById("demo").innerHTML += this;
}

window.addEventListener("load", hello3);

document.getElementById('btn').addEventListener('click',hello3);



// Arrow Function:
hello4 = () => {
    document.getElementById("demo2").innerHTML += this;
  }
  
  // The window object calls the function:
  window.addEventListener("load", hello4);
  
  // A button object calls the function:
  document.getElementById("btn2").addEventListener("click", hello4);
  
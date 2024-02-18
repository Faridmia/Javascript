const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
// element.appendChild(para);

const child = document.getElementById("p1");

element.insertBefore(para,child);

const parent = document.getElementById("div1");

parent.replaceChild(para, child);


// parent.removeChild(child);



function myFunction() {
    const myCollection = document.getElementsByTagName("p");
    for (let i = 0; i < myCollection.length; i++) {
      myCollection[i].style.color = "red";
    }
  }
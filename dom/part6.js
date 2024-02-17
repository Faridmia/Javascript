const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
// element.appendChild(para);

const child = document.getElementById("p1");

element.insertBefore(para,child);

const parent = document.getElementById("div1");


parent.removeChild(child);
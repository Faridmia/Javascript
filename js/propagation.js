
function func1(event) {
  alert("DIV 1");
  if(document.getElementById('check').checked) {
    event.stopPropagation();
  }
}

function func2() {
  alert("DIV 2");
}

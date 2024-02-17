let element = document.getElementById('myimage');

element.src = "myimage.jpg";

let content = document.getElementById('demo');

// content.innerHTML = 'Today\'s is: ' + Date();
content.innerHTML = `Today's date is:   ${Date()} `;
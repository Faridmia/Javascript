// Save Data to Session Storage
sessionStorage.setItem("authToken", "abcd1234");

let token = sessionStorage.getItem("authToken");
console.log(token);
sessionStorage.removeItem("authToken");

sessionStorage.clear();

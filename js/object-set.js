const letters = new Set(["a","b","c"]);

let txt = "";

letters.forEach(function(value) {
    txt += value + "\n";
});

console.log(txt);
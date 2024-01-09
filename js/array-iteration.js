const numbers = [45, 4, 9, 16, 25];

txt = '';

numbers.forEach(function(value, index, array) {
    txt += value + "\n";
});

console.log(txt);
let random_value = Math.floor(Math.random() + 1 );

console.log( random_value );

const points = [40, 100, 1, 5, 25, 10];

points.sort(function(a,b) {
    return a - b;
})

console.log( points );
let random_value = Math.floor(Math.random() + 1 );

console.log( random_value );

const points = [40, 100, 1, 5, 25, 10];

points.sort(function(a,b) {
    return a - b;
})

console.log( points );

const points2 = [40, 100, 1, 5, 25, 10];
points2.sort(function(a, b){return a - b});

let minvalue = points2[0];
let maxvalue = points2[ points2.length -1 ];

console.log( minvalue );
console.log( maxvalue );


const points3 = [40, 100, 1, 5, 25, 10];

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

function myArrayMax(arr) {
    return Math.max.apply(null, arr);
  }

console.log( myArrayMin(points3));
console.log( myArrayMax(points3));
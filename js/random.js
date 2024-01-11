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

const points4 = [40, 100, 1, 5, 25, 10];
// function myArrayMin2(arr) {
//     let len = arr.length;
//     let min = Infinity;
//     while (len--) {
//       if (arr[len] < min) {
//         min = arr[len];
//       }
//     }
//     return min;
// }


function myArrayMin2(value) {
    let length = value.length;

    let min = Infinity;

    while( length--) {
        if(value[length] < min ) {
            min = value[length];
        }
    }

    return min;
}


function myArrayMax2(arr) {
    let len = arr.length;

    let max = -Infinity;

    while(len--) {
        if(arr[len] > max ) {
            max = arr[len];
        }
    }

    return max;
}

console.log(myArrayMin2(points4));
console.log(myArrayMax2(points4));
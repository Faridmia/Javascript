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


const myArr = [
    {name:"X00",price:100 },
    {name:"X01",price:100 },
    {name:"X02",price:100 },
    {name:"X03",price:100 },
    {name:"X04",price:110 },
    {name:"X05",price:110 },
    {name:"X06",price:110 },
    {name:"X07",price:110 },
    {name:"X08",price:120 },
    {name:"X09",price:120 },
    {name:"X10",price:120 },
    {name:"X11",price:120 },
    {name:"X12",price:130 },
    {name:"X13",price:130 },
    {name:"X14",price:130 },
    {name:"X15",price:130 },
    {name:"X16",price:140 },
    {name:"X17",price:140 },
    {name:"X18",price:140 },
    {name:"X19",price:140 }
];

myArr.sort( ( p1,p2) => {
    if(p1.price < p2.price) return -1;
    if(p1.price > p2.price) return 1;
    return 0;
});


let textxt = "";

myArr.forEach(priceFunc);

function priceFunc(value) {
     textxt += value.name + " " + value.price + "\n";
    
}
console.log(textxt);
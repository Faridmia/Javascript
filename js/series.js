// series 2 4 6 8 10 12

var series = "";
var n;

for(var i = 1;i<=10;i++){
    n = i * 2;

    series = series + n + " ";

}

console.log("series 1 is: " ,series);

var series = "1 ";

var n = 1;

for(var i = 1;i<=10;i++){
    n = n+3;

    series = series + n + " ";

}

console.log("series 2 is:", series);


var series = "";



for(var i = 1;i<=10;i++){
    n = i*i-1;

    series = series + n + " ";

}

console.log("series 3 is:", series);

var series = "";
for(var i = 1;i<=10;i++){
    n = i;
    if(n%2 == 0){
        n = i*2;
    }

    series = series + n + " ";

}

console.log("series 4 is:", series);
// 0 1 1 2 3 5 8 13
var series = "0 1 ";
var x = 0;
var y = 1;
for(var i = 1;i<=10;i++){
    
    n = x+y;
    x = y;
    y = n;

    series = series + n + " ";

}

console.log("series 5 is: ", series);





function display(some) {
    console.log(some);
}

function calculator(num1,num2,callback) {
    let sum = num1 + num2;
    callback(sum);
    //return sum;
}

let obj = calculator(10,15, display);

//display(obj);
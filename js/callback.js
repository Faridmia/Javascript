// function display(some) {
//     console.log(some);
// }

function calculator(num1,num2,callback) {
    let sum = num1 + num2;
    callback(sum);
   // return sum;
}

calculator(10,15, function(result){
    console.log(result)
});

//display(obj);
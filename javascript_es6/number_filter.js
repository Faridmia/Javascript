let arr = [1,2,3,4,5,6,7,8];

let number = arr.filter(( currentValue,index,arr ) => {
    console.log(index);
    console.log(arr);
    return currentValue > 4;
})

console.log(number);
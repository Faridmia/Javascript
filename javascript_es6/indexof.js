let arr = [1,2,3,4,5,6,7,8];

let number = arr.find(( currentValue,index,arr ) => {
    return currentValue > 4;
})

console.log(number);
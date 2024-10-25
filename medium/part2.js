function memoize(func) {

    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if(cache.has(key) ) {
            return cache.get(key);
        }

        const result = func.apply( this,args );

        cache.set(key, result);

        return result;
    }
}


const expensiveFunction = memoize((num) => {
    console.log("hello world..");
    return num * 2;
});


console.log(expensiveFunction(2)); 
console.log(expensiveFunction(2));

// Using `for…of` for Iteration

const arrData = [1, 3,5,6,8,9];

for ( const arr of arrData ) {
    console.log( arr );
}


// event delegation

document.getElementById('parent').addEventListener('click',( event) => {
    if(event.target && event.target.matches('button.classname')) {
        console.log("Button clicked", event.target.textContent);
    }
})


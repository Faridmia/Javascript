function myNumbers() {
    let n = 0;
    return {
      next: function() {
        n += 10;
        return {value:n, done:false};
      }
    };
}

const m = myNumbers();

m.next();
m.next();
m.next();

console.log(m.next().value);

// Create an Object
let myNumbers2 = {};


// make it iterable

myNumbers2[Symbol.iterator] = function () {
    let n = 0;
    done = false;
    
    return {
        next() {
            n += 10;
            if( n == 100 ) {
                done = true;
            }

            return {value:n,done:done}
        }
    }
}

for(const num of  myNumbers2 ) {
    console.log(num);
}




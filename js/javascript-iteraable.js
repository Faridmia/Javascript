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
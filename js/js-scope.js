function outerFunction() {
    const outerVar = 'Outer';
    
    function innerFunction() {
        console.log(outerVar); // Accessible due to lexical scoping
    }
    
    innerFunction();
}

outerFunction(); // Output: Outer
function tempory() {
    let counter = 0;

    return function() {
        counter += 1;
        console.log(counter);
    }
}

const add = tempory();


add();

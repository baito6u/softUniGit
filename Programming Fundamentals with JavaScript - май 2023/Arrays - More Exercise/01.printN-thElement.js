function printNElement(array) {

    let n = array.pop();
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (i % n === 0) {
            newArray.push(array[i]);
        }
    }
    console.log(newArray.join(' '));
}

printNElement(['dsa', 'asd', 'test', 'test', '2']);
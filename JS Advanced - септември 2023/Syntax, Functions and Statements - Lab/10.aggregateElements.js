function aggregateElements(array) {

    let sum = array.reduce((a, current) => a + current);
    let concat = array.slice().join('');

    let inverseValuesSum = 0;
    
    for (let i = 0; i < array.length; i++) {
        inverseValuesSum += 1 / array[i];
    }

    console.log(sum);
    console.log(inverseValuesSum);
    console.log(concat);
}

aggregateElements([1, 2, 3]);
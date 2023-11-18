function condenseArrayToNumber(array) {

    while (array.length > 1) {
        let condensedArray = [array.length - 1];

        for (let i = 0; i < array.length - 1; i++) {
            condensedArray[i] = Number(array[i]) + Number(array[i + 1]);
        }
        array = condensedArray;
    }
    console.log(array[0]);
}

condenseArrayToNumber([2, 10, 3]);
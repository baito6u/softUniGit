function mergeArrays(arr1, arr2) {
    let arr3 = [];
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        let elementOne = Number(arr1[i]);
        let elementTwo = Number(arr2[i]);
        if (i % 2 == 0) {
            sum = elementOne + elementTwo;
            arr3.push(sum);

        } else {
            arr3.push(arr1[i] + arr2[i]);
        }
    }
    console.log(arr3.join(' - '));
}

mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);
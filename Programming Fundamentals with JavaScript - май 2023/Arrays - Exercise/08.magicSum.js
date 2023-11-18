function magicSum(array, n) {

    let sum = 0;
    let result = '';

    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        for (let j = i + 1; j < array.length; j++) {
            let nextElement = array[j];

            sum = element + nextElement;

            if (sum == n) {
                result += `${element} ${nextElement} 
`;
            }

        }
    }
    console.log(result);
}

magicSum([14, 20, 60, 13, 7, 19, 8], 27);
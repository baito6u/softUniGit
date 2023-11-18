function extractIncreasingSubsequenceFromArray(array) {

    let biggestNum = array[0];
    let resultArray = [array[0]];

    for (let index = 1; index < array.length; index++) {
        const element = Number(array[index]);

        if (element >= biggestNum) {
            biggestNum = element;

            resultArray.push(element);
        }
    }
    return resultArray;
}

console.log(extractIncreasingSubsequenceFromArray([20,
    3,
    2,
    15, 6, 1]));
//[1, 3, 8, 10, 12, 24]
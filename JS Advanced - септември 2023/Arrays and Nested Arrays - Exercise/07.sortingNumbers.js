function sortingNumbers(array) {

    let sortedArray = array.sort((a, b) => a - b);
    let resultArray = [];

    while (sortedArray.length !== 0) {
        let firstNum = sortedArray.shift();
        let lastNum = sortedArray.pop();

        resultArray.push(firstNum, lastNum);
    }

    return resultArray;

}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
//[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
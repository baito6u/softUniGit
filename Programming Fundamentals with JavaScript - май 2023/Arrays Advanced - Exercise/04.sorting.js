function sorting(numbers) {

    let sortedArray = numbers.sort((a, b) => b - a);
    let resultArray = [];
    let lengthNumbers = numbers.length

    for (let index = 0; index < lengthNumbers / 2; index++) {
        let currElement = sortedArray.shift();
        let lastElement = sortedArray.pop();

        resultArray.push(currElement);
        resultArray.push(lastElement);
    }

    console.log(resultArray.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
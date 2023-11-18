function oddAndEvenSum(num) {

    let numToString = num + '';
    let oddSum = 0;
    let evenSum = 0;

    for (let index = 0; index < numToString.length; index++) {
        let currDigit = Number(numToString[index]);

        if (currDigit % 2 === 0) {
            evenSum += currDigit
        } else {
            oddSum += currDigit
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;

}

console.log(oddAndEvenSum(3495892137259234));
function equalSumsEvenOddPosition(input) {
    let startNum = Number(input[0]);
    let EndNum = Number(input[1]);

    let result = '';

    for (let currentNum = startNum; currentNum <= EndNum; currentNum++) {
        let currentNumStr = currentNum.toString();

        let oddSum = 0;
        let evenSum = 0;

        for (let index = 0; index < currentNumStr.length; index++) {
            let currDigit = Number(currentNumStr[index]);

            let position = index + 1;

            if (position % 2 === 0) {
                evenSum += currDigit;
            } else {
                oddSum += currDigit;
            }
        }
        if (oddSum === evenSum) {
            result += `${currentNumStr} `;
        }
    }
    console.log(result);
}

equalSumsEvenOddPosition(["123456", "124000"]);
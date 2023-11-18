function specialNumbers(input) {
    let n = Number(input[0]);

    let startNum = 1111;
    let endNum = 9999;

    let specialNum = '';

    for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
        let currentNumStr = currentNum.toString();

        let isSpecial = true;

        for (let index = 0; index < currentNumStr.length; index++) {
            let currDigit = Number(currentNumStr[index]);

            if (n % currDigit != 0) {
                isSpecial = false;
                break;
            }
        }
        if (isSpecial) {
            specialNum += `${currentNumStr} `;
        }
    }
    console.log(specialNum)

}
specialNumbers(["3"]);
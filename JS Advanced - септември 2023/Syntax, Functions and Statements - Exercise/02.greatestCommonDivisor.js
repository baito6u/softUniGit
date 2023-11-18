function greatestCommonDivisor(firstNum , secondNum) {

    while (secondNum) {
        const temp = secondNum;
        secondNum = firstNum % secondNum;
        firstNum = temp;
    }
    console.log(firstNum);
}
greatestCommonDivisor(15, 5);
// 5
greatestCommonDivisor(2154, 458);
// 2
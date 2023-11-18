function sumOfTwoNumbers(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);

    let magicNum = Number(input[2]);

    let isFound = false;

    let combinationCounter = 0;

    for (let num1 = firstNum; num1 <= secondNum; num1++) {

        for (let num2 = firstNum; num2 <= secondNum; num2++) {
            combinationCounter++;

            let sum = num1 + num2;

            if (sum === magicNum) {
                isFound = true;
                console.log(`Combination N:${combinationCounter} (${num1} + ${num2} = ${magicNum})`);
                break;
            }
        }
        if (isFound == true) {
            break;
        }
    }
    if (isFound == false) {
        console.log(`${combinationCounter} combinations - neither equals ${magicNum}`);
    }
}

sumOfTwoNumbers(["23", "24", "20"]);
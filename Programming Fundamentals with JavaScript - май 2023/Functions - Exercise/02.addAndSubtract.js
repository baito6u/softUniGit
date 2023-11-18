function addAndSubtract(num1, num2, num3) {

    function sum(num1, num2) {
        return num1 + num2;
    }

    let sumResult = sum(num1, num2);

    function subtract(sumResult, num3) {
        return sumResult - num3;
    }

    return subtract(sumResult, num3)

}

console.log(addAndSubtract(23, 6, 10)); 
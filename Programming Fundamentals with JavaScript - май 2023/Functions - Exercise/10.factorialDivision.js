function factorialDivision(firstNum, secondNum) {

    function factorial(num) {
        if (num === 0) {
            return 1;
        } else {
            return num * factorial(num - 1)
        }
    }

    let firstNumFactorial = factorial(firstNum);
    let secondNumFactorial = factorial(secondNum);
    let result = firstNumFactorial / secondNumFactorial;
    
    console.log(result.toFixed(2));
}

factorialDivision(5, 2);
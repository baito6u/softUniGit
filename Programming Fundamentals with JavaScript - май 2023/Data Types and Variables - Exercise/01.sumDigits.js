function sumDigits(num) {
    let numAsString = num.toString();
    let sum = 0;
    let numOfDigits = numAsString.length;

    for (let i = 0; i < numOfDigits; i++) {
        let currDigit = Number(numAsString[i]);
        sum += currDigit;
    }
    console.log(sum);
}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);
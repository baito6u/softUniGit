function palindromeIntegers(array) {

    for (let index = 0; index < array.length; index++) {
        let curNumAsString = array[index].toString();
        let reversedCurNum = curNumAsString.split('').reverse().join('');

        if (curNumAsString === reversedCurNum) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

console.log(palindromeIntegers([123, 323, 421, 121]));
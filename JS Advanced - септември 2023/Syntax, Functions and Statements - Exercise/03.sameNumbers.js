function sameNumbers(num) {
    let sum = 0;
    let isSameNum = true;

    let numAsArray = num.toString()  //String(num)//num + "";
        .split('')
        .map((n) => (Number(n)));

    for (let i = 0; i < numAsArray.length; i++) {
        let currentNum = numAsArray[i];
        sum += currentNum

        if (currentNum !== numAsArray[0]) {
            isSameNum = false;
        }
    }

    console.log(isSameNum);
    console.log(sum);

}

sameNumbers(2222222);
//true
//14
sameNumbers(1234);
//false
//10
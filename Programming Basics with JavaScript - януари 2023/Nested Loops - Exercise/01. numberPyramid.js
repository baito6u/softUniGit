function numberPyramid(input) {
    let n = Number(input[0]);

    let currentNum = 1;
    let isBigger = false;
    let printCurrentLine = '';

    for (let rows = 1; rows <= n; rows++) {
        for (let columns = 1; columns <= rows; columns++) {
            if (currentNum > n) {
                isBigger = true;
                break;
            }
            printCurrentLine += currentNum + ' ';
            currentNum++;
        }
        console.log(printCurrentLine);
        printCurrentLine = '';
        if (isBigger) {
            break;
        }
    }
}

numberPyramid(["15"]);
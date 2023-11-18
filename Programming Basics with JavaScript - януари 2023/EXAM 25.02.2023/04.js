function solve(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let s = Number(input[2]);

    let result = '';

    for (let currNum = m; currNum >= n; currNum--) {

        if (currNum % 2 === 0 && currNum % 3 === 0) {
            if (currNum == s) {
                break;
            }
            result += `${currNum} `;
        }
    }
    console.log(result);
}

solve(["1",
    "36",
    "12"])

function printAndSum(start, end) {

    let sum = 0;
    let curLog = '';

    for (let i = start; i <= end; i++) {
        let curNum = i;
        sum += curNum;
        curLog += `${curNum} `
    }
    console.log(curLog);
    console.log(`Sum: ${sum}`);
}

printAndSum(50, 60);
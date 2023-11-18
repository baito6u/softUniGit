function distinctArray(numbers) {

    let uniqueNum = [];

    for (const num of numbers) {
        if (!uniqueNum.includes(num)) {
            uniqueNum.push(num);
        }
    }
    console.log(uniqueNum.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
function squareOfStars(num) {
    num = Number(num);

    let output = '';

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            output += '*' + ' ';
        }
        output += "\n";
    }
    console.log(output);
}

squareOfStars(2);
function triangleOfNumbers(n) {

    for (let row = 1; row <= n; row++) {
        let output = '';

        for (let col = 1; col <= row; col++) {
            output += `${row} `;
        }
        console.log(output);
    }
}
triangleOfNumbers(3);
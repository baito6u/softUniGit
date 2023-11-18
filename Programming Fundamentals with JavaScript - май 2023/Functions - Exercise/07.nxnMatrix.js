function nxnMatrix(num) {

    function rowGenerator() {
        let row = '';
        for (let j = 1; j <= num; j++) {
            row += `${num} `;
        }
        return row;
    }

    for (let index = 1; index <= num; index++) {

        console.log(rowGenerator());

    }
}

nxnMatrix(3);
function sumOfNumbers(n, m) {

    n = Number(n);
    m = Number(m);
    let result = 0;

    for (let index = n; index <= m; index++) {
        result += index;
    }

    console.log(result);
}

sumOfNumbers('1', '5');
sumOfNumbers('-8', '20');
function sumEvenNumbers(array) {
    let even = 0
    for (let i = 0; i < array.length; i++) {
        let element = Number(array[i]);
        if (element % 2 == 0) {
            even += element;
        }
    }
    console.log(even);
}
sumEvenNumbers(['2', '4', '6', '8', '10']);
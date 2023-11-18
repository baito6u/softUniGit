function evenAndOddSubtraction(array) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < array.length; i++) {
        let element = Number(array[i]);

        if (element % 2 == 0) {
            even += element;
        } else {
            odd += element;
        }
    }
    console.log(even - odd);
}
evenAndOddSubtraction([3, 5, 7, 9]);
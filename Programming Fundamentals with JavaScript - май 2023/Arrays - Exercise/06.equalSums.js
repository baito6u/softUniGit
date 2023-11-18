function equalSums(array) {

    let foundIndex = 'no';

    let arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let l = 0; l < i; l++) {
            leftSum += array[l];
        }

        for (let r = i + 1; r < arrayLength; r++) {
            rightSum += array[r];
        }

        if (leftSum === rightSum) {
            foundIndex = i;
        }

    }
    console.log(foundIndex);

}
equalSums([1, 2]);
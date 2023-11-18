function bombNumbers(sequenceOfNumbers, bombNumber) {

    let specialBombNumber = Number(bombNumber[0]);
    let bombPower = Number(bombNumber[1]);

    while (sequenceOfNumbers.includes(specialBombNumber)) {
        let index = sequenceOfNumbers.indexOf(specialBombNumber);
        let elementToRemove = bombPower * 2 + 1;
        let startIndex = index - bombPower;

        if(startIndex < 0) {
            elementToRemove += startIndex;
            startIndex = 0;
        }
        sequenceOfNumbers.splice(startIndex, elementToRemove);
    }
    console.log(sequenceOfNumbers.reduce((a, b) => a + b, 0));
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
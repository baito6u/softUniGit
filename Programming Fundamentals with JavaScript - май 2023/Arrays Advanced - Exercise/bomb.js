function bombNumbers(sequenceOfNumbers, bombNumber) {

    let specialBombNumber = Number(bombNumber[0]);
    let bombPower = Number(bombNumber[1]);

    let sum = 0;

    for (let index = 0; index < sequenceOfNumbers.length; index++) {
        let currentIndex = Number(sequenceOfNumbers[index]);
        if (specialBombNumber - bombPower >= 0 && bombPower + index < sequenceOfNumbers.length) {
            sequenceOfNumbers.splice(specialBombNumber - bombPower, bombPower * 2 + 1);
        }
        sum += currentIndex;
    }
    console.log(sequenceOfNumbers);
    console.log(sum);
}

bombNumbers[1, 4, 4, 2, 8, 9, 1], [9, 3];
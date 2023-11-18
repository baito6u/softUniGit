function arrayModifier(array) {

    let arrayToModify = array.shift().split(' ').map(Number);
    let arrayLength = array.length;

    for (let index = 0; index < arrayLength; index++) {
        let currIndex = array[index].split(' ');
        let command = currIndex[0];
        let indexOne = currIndex[1];
        let indexTwo = currIndex[2];

        // above 4 rows can replaced by: let [command, indexOne, IndexTwo] = array[index].split(' ');

        switch (command) {
            case 'swap':
                let temp = arrayToModify[indexOne];
                arrayToModify[indexOne] = arrayToModify[indexTwo];
                arrayToModify[indexTwo] = temp;
                break;
            case 'multiply':
                let result = arrayToModify[indexOne] * arrayToModify[indexTwo];
                arrayToModify[indexOne] = result;
                break;
            case 'decrease':
                arrayToModify = arrayToModify.map(n => n - 1);
                break;
            case 'end':
                break;
        }
    }
    console.log(arrayToModify.join(', '));
}

arrayModifier(['23 -2 321 87 42 90 -123',
    'swap 1 3', 'swap 3 6', 'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);

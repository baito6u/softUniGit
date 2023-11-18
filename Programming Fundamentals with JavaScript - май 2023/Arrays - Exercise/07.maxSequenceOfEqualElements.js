function maxSequenceOfEqualElements(array) {

    let longestSequence = [];

    for (let i = 0; i < array.length; i++) {
        let currElement = array[i];
        let currSequence = [currElement];

        for (let j = i + 1; j < array.length; j++) {
            let nextElement = array[j];

            if (currElement === nextElement) {
                currSequence.push(nextElement);
            } else {
                break;
            }
        }
        if (currSequence.length > longestSequence.length) {
            longestSequence = currSequence;
        }
    }
    console.log(longestSequence.join(' '));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
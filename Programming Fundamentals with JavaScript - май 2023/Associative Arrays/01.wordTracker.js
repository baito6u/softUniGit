function wordTracker(array) {

    let map = new Map();

    let neededWords = array.shift().split(' ');

    neededWords.forEach(word => {
        map.set(word, 0);
    });

    for (let word of array) {
        for (let wordToCheck of neededWords) {

            if (word === wordToCheck) {
                let currentQuantity = map.get(word);
                map.set(word, currentQuantity + 1);
            }
        }
    }

    let sortedWords = Array.from(map.entries());
    sortedWords.sort((a, b) => b[1] - a[1]);

    sortedWords.forEach(element => {
        console.log(`${element.join(' - ')}`);
        //console.log(`${element[0]} - ${element[1]}`);
    });

}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
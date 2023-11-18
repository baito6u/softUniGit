function sortAnArrayByTwoCriteria(array) {

    let sortedArray = array.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length || a.localeCompare(b);
        }
    });
    console.log(sortedArray.join('\n'));
}

sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
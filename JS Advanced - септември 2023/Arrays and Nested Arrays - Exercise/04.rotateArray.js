function rotateArray(array, num) {

    for (let i = 0; i < num; i++) {
        let lastElement = array[array.length - 1];
        array.unshift(lastElement);
        array.pop();
    }
    console.log(array.join(' '));
}

rotateArray(['1',
    '2',
    '3',
    '4'],
    2);
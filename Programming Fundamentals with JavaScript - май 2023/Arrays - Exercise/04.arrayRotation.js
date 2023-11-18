function arrayRotation(array, rotations) {

    for (let i = 0; i < rotations % array.length; i++) {    // модулното деление се прави да оптимизира въртенето на цикъла
        let elementToMove = array.shift();
        array.push(elementToMove);
    }
    console.log(array.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
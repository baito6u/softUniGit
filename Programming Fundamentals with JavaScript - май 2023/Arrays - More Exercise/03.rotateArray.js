function rotateArray(arr) {

    let rotation = Number(arr[arr.length - 1]);
    arr.pop();

    while (true) {
        
        if (rotation <= 0) {
            break;
        }

        arr.unshift(arr.pop());
        
        rotation--;
    }
    console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
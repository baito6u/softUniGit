function reverseInPlace(array) {
    let output = '';
    for (let i = 0; i < array.length; i++) {
        let element = array[array.length - 1 - i];
        output += `${element} `;
    }
    console.log(output);
}
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
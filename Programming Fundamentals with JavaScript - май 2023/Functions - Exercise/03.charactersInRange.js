function charactersInRange(firstChar, secondChar) {

    let startChar = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let endChar = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());

    let charArray = [];

    for (let index = startChar + 1; index < endChar; index++) {
        charArray.push(String.fromCharCode(index));
    }

    return charArray.join(' ');

}

console.log(charactersInRange('a', 'd'));
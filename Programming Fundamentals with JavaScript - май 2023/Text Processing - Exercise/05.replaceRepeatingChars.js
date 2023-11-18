function replaceRepeatingChars(text) {

    //let text = text.split('');
    let resultArray = [];

    for (let char = 0; char < text.length; char++) {
        let currentChar = text[char];

        if (text[char + 1] !== currentChar) {
            resultArray.push(currentChar);
        }
    }
    console.log(resultArray.join(''));
}
replaceRepeatingChars('qqqwerqwecccwd');
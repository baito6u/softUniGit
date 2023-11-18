function stringSubstring(word, text) {

    let textLowerCase = text.toLowerCase().split(' ');

    if (textLowerCase.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

stringSubstring('python',
    'JavaScript is the best programming language');
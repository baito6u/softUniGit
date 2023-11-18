function oddOccurrences(sentence) {

    let sentenceAsArray = sentence.split(' ').map(e => e.toLowerCase());
    let wordAsObject = {};

    for (const word of sentenceAsArray) {
        if (!wordAsObject.hasOwnProperty(word)) {
            wordAsObject[word] = 0;
        }
        wordAsObject[word]++;
    }

    let arrayOfOddElement = Object.entries(wordAsObject).filter(couple => couple[1] % 2 !== 0).sort((a, b) => b[1] - a[1]);

    let result = '';
    for (const array of arrayOfOddElement) {
        result += `${array[0]} `;
    }
    console.log(result);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
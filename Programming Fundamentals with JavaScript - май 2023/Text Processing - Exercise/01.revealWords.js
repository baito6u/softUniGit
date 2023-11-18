function revealWords(words, sentence) {

    wordsArray = words.split(', ');

    for (let word of wordsArray) {

        let wordsFromStars = '*'.repeat(word.length);
        sentence = sentence.replace(wordsFromStars, word);

    }
    console.log(sentence);
}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);
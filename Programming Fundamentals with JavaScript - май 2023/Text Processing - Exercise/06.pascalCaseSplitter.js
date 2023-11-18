function pascalCaseSplitter(text) {

    let words = [];
    let index = 0;

    for (let i = 1; i < text.length; i++) {

        if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
            words.push(text.substring(index, i));
            index = i;
        }
    }
    words.push(text.substring(index, text.length));
    console.log(words.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
function mirrorWords(array) {

    let regex = /([@#])(?<one>[A-Za-z]{3,})\1(@|#)(?<two>[A-Za-z]{3,})\1/g;

    let count = 0;
    let results = [];
    for (const text of array) {
        let matches = text.matchAll(regex);
        for (const match of matches) {
            count++;

            let firstWord = match.groups.one;
            let secondWord = match.groups.two;

            let reversedSecondWord = reversedStr(secondWord);

            if (firstWord === reversedSecondWord) {
                results.push(`${firstWord} <=> ${secondWord}`);
            }
        }
    }

    if (count === 0) {
        console.log('No word pairs found!');
    } else {
        console.log(`${count} word pairs found!`);
    }

    if (results.length === 0) {
        console.log('No mirror words!');
    } else {
        console.log(`The mirror words are:\n${results.join(', ')}`);
    }

    function reversedStr(text) {
        let reversed = '';
        for (let index = text.length - 1; index >= 0; index--) {
            reversed += text[index];
        }
        return reversed;
    }

}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
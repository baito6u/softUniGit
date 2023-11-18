function theImitationGame(array) {

    let text = array.shift();

    for (const line of array) {

        if (line === 'Decode') {
            break;
        }
        let token = line.split('|');
        let action = token[0];

        if (action === 'Move') {
            let n = Number(token[1]);
            for (let index = 0; index < n; index++) {
                let firstLetter = text.substring(0, 1);
                let anotherText = text.substring(1);
                text = anotherText + firstLetter;
            }
        }

        if (action === 'Insert') {
            let index = Number(token[1]);
            let value = token[2];
            text = text.substring(0, index) + value + text.substring(index);
        }

        if (action === 'ChangeAll') {
            let substring = token[1];
            let replace = token[2];
            while (text.includes(substring)) {
                text = text.replace(substring, replace);
            }
        }
    }
    console.log(`The decrypted message is: ${text}`);

}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);
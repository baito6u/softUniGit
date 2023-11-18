function theImitationGameNew(array) {

    let message = array.shift();

    let instructions = array.shift();

    while (instructions != 'Decode') {
        let currentLine = instructions.split('|');
        let command = currentLine[0];

        switch (command) {
            case 'ChangeAll': {
                let substring = currentLine[1];
                let value = currentLine[2];

                while (message.includes(substring)) {
                    message = message.replace(substring, value);
                }
                break;
            }
            case 'Insert': {
                let index = currentLine[1];
                let value = currentLine[2];

                message = message.substring(0, index) + value + message.substring(index);

                break;
            }

            case 'Move': {
                let index = currentLine[1];
                let substring = message.substring(0, index);
                let nextText = message.substring(index);

                message = nextText + substring;

                break;
            }
        }

        instructions = array.shift();
    }
    console.log(`The decrypted message is: ${message}`);
}
theImitationGameNew([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode', ]);
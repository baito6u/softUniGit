function secretChat(array) {

    let message = array.shift();

    let instructions = array.shift();

    while (instructions !== 'Reveal') {
        let instruction = instructions.split(':|:');
        let command = instruction.shift();

        switch (command) {
            case 'ChangeAll': {
                let substring = instruction[0];
                let replacement = instruction[1];

                // while (message.includes(substring)) {
                //     message = message.replace(substring, replacement);
                // }
                if (message.includes(substring)) {
                    let splitted = message.split(substring);
                    message = splitted.join(replacement);
                }
                console.log(message);
                break;
            }
            case 'Reverse': {
                let substring = instruction[0];
                
                if (message.includes(substring)) {
                    let reversedSubstring = substring.split('').reverse().join('');
                    // let splittedMessage = message.split(substring);
                    // message = splittedMessage.join(reversedSubstring);
                    message = message.replace(substring, '');
                    message += reversedSubstring;
                    console.log(message);
                } else {
                    console.log('error');
                }

                break;
            }
            case 'InsertSpace': {
                let index = Number(instruction[0]);
                let leftSide = message.substring(0, index);
                let rightSide = message.substring(index);

                message = leftSide + " " + rightSide;
                console.log(message);
                break;
            }
        }
        instructions = array.shift();
    }
    console.log(`You have a new text message: ${message}`);
}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]);
function modernTimes(text) {

    let textArray = text.split(' ');

    for (let index = 0; index < textArray.length; index++) {
        let element = textArray[index];

        if (element[0] === '#' && element.length > 1) {
            let elementArray = element.split('');
            elementArray.shift(); //removing '#'

            let result = '';

            for (let char of elementArray) {

                if (!isNaN(char)) {  // we check if it is a number
                    result = '';
                    break;
                } else {
                    result += char;
                }
            }
            if (result.length > 0) {
                console.log(result);
            }
        }
    }
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
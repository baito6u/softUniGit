function emailValidator(array) {

    let email = array.shift();

    let line = array.shift();

    while (line !== 'Complete') {
        let [command, ...arguments] = line.split(' ');

        switch (command) {
            case 'Make': {
                let upperOrLower = arguments[0];
                email = upperOrLower == 'Upper' ? email.toUpperCase() : email.toLowerCase();
                console.log(email);
                break;
            }
            case 'GetDomain': {
                let count = Number(arguments[0]);
                let substring = email.substring(email.length - count);
                console.log(substring);
                break;
            }
            case 'GetUsername': {
                let symbol = '@';
                let splitedEmail = email.split('@');

                if (email.includes(symbol)) {
                    console.log(splitedEmail[0]);
                } else {
                    console.log(`The email ${email} doesn't contain the @ symbol.`);
                }
                break;
            }
            case 'Encrypt': {
                let allCharr = ''
                for (let index = 0; index < email.length; index++) {
                    let currentChar = Number(email[index].charCodeAt())
                    allCharr += `${currentChar} `;
                }
                console.log(allCharr);

                break;
            }
            case 'Replace': {
                let char = arguments[0];
                while (email.includes(char)) {
                    email = email.replace(char, '-');
                }
                console.log(email);
                break;
            }
        }
        line = array.shift();
    }

}

emailValidator(["AnotherMail.com",
    "Make Lower",
    "GetUsername",
    "Replace a",
    "Complete"]);
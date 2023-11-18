function problemOne(input) {

    let password = input.shift();

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' ');
        let command = tokens[0];
        let values = tokens.slice(1);


        switch (command) {
            case 'Make':
                let command = values[0];
                let index = values[1];
                if (command == 'Upper') {
                    let part = password[index].toUpperCase();
                    password = password.replace(password[index], part);
                    console.log(password);
                } else if (command == 'Lower') {
                    let part = password[index].toLowerCase();
                    password = password.replace(password[index], part);
                    console.log(password);
                }
                break;
            case 'Insert':
                let i = values[0];
                let char = values[1];
                let passLength = password.length;

                if (i > passLength) {
                    break;
                } else {
                    password = password.substring(0, i) + char + password.substring(i);
                    console.log(password);
                }

                break;
            case 'Replace':
                let oldChar = values[0];
                let ch = Number(values[0].charCodeAt());
                let value = Number(values[1]);
                let sum = ch + value;
                let newChar = String.fromCharCode(sum)

                while (password.includes(oldChar)) {
                    password = password.replace(oldChar, newChar);
                }
                console.log(password);
                break;
            case 'Validation':
                if (password.length < 8 && password > 8) {
                    console.log("Password must be at least 8 characters long!");
                } 
                if (!password.charCodeAt() >= 48 && password.charCodeAt() <= 57 || password.charCodeAt() >= 97 && password.charCodeAt() <= 122 || password.charCodeAt() == 95) {
                    console.log("Password must consist only of letters, digits and _!");
                    console.log("Password must consist at least one uppercase letter!");
                    console.log("Password must consist at least one lowercase letter!");
                    console.log("Password must consist at least one digit!");
                }
                break;
            case 'Complete': return;
        }
    }

}
problemOne((['invalidpassword*',
    'Insert 2 p',
    'Replace i -50',
    'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete'])
);
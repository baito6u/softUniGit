function passwordReset(data) {

    let password = data.shift();

    let commandParser = {
        'TakeOdd': (password) => {
            return [...password]    //... разбиват стринг на елементи
                .filter((char, index) => {
                    return index % 2 !== 0;
                })
                .join('');
        },
        'Cut': (password, index, length) => {
            index = Number(index);
            length = Number(length);

            let substring = password.substr(index, length);

            return password.replace(substring, '');
        },
        'Substitute': (password, substring, subsitute) => {
            if (password.includes(substring)) {
                return password.replace(new RegExp(substring, 'g'), subsitute);
            }
            console.log("Nothing to replace!");
            return password;
        }
    };

    data.forEach(line => {
        if (line !== 'Done') {
            let [command, ...tokens] = line.split(' ');
            let oldPassword = password;

            password = commandParser[command](password, ...tokens);

            if (oldPassword !== password) {
                console.log(password);
            }
        }
    });

    console.log(`Your password is: ${password}`);

}

passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]));
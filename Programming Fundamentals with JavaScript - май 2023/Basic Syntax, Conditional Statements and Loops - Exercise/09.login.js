function login(arr) {
    let userName = arr[0];
    let passWord = '';

    for (let i = userName.length - 1; i >= 0; i--) {
        passWord += userName[i];
    }
    let counter = 0;
    for (let j = 1; j <= arr.length - 1; j++) {
        let currElement = arr[j];
        counter++;
        if (currElement == passWord) {
            console.log(`User ${userName} logged in.`);
            return;
        } else {
            if (counter == 4) {
                console.log(`User ${userName} blocked!`);
                return;
            }
            console.log('Incorrect password. Try again.');
        }
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);


function passwordValidator(password) {

    let isValid = true;
    let isInvalidLength = password.length < 6 || password.length > 10;

    if (isInvalidLength) {
        isValid = false;
        console.log("Password must be between 6 and 10 characters");
    }

    let isOnlyLettersAndDigits = true;
    let digitCounter = 0;

    for (let index = 0; index < password.length; index++) {
        let currCode = password.charCodeAt(index);

        let isNotNumber = currCode < 48 || currCode > 57;
        let isNumber = currCode >= 48 && currCode <= 57;
        let isNotSmallLetter = currCode < 97 || currCode > 122;
        let isNotBigLetter = currCode < 65 || currCode > 90;

        if (isNumber) {
            digitCounter++;
        }

        if (isNotNumber && isNotSmallLetter && isNotBigLetter) {
            isValid = false;
            isOnlyLettersAndDigits = false;
        }
    }

    if (!isOnlyLettersAndDigits) {
        console.log("Password must consist only of letters and digits");
    }

    if (!(digitCounter >= 2)) {
        isValid = false;
        console.log("Password must have at least 2 digits");
    }

    if (isValid) {
        console.log("Password is valid");
    }

}

passwordValidator('logIn');
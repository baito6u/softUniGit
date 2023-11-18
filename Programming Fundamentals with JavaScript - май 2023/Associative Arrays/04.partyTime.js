function partyTime(array) {

    let vipList = [];
    let regularList = [];

    let command = array.shift();

    while (command !== 'PARTY') {

        let firstChar = command[0];
        if (isNaN(firstChar)) {
            regularList.push(command)
        } else {
            vipList.push(command);
        }

        command = array.shift();
    }

    let allGuests = vipList.concat(regularList);

    for (let gest of array) {
        if (allGuests.includes(gest)) {
            allGuests.splice(allGuests.indexOf(gest), 1);
        }
    }
    console.log(allGuests.length);
    allGuests.forEach(guest => console.log(guest));
}

partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);
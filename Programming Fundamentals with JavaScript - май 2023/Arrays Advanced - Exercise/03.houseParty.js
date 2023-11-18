function houseParty(array) {

    let partyList = [];

    for (const person of array) {

        let details = person.split(' ');
        let personName = details[0];

        if (details.includes('not')) {

            if (partyList.includes(personName)) {
                let nameIndex = partyList.indexOf(personName);

                if (nameIndex !== -1) {
                    partyList.splice(nameIndex, 1);
                }
            } else {
                console.log(`${personName} is not in the list!`);
            }
        } else {
            if (partyList.includes(personName)) {
                console.log(`${personName} is already in the list!`);
            } else {
                partyList.push(personName);
            }
        }
    }
    partyList.forEach(person => console.log(person));
}

houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);